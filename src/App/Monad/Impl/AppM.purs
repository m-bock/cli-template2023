module App.Monad.Impl.AppM
  ( AppM
  , Result(..)
  , runAppM
  ) where

import Prelude

import App.Monad.Class.App (class MonadApp)
import App.Types (AppEnv, AppError)
import Control.Monad.Error.Class (class MonadError, class MonadThrow)
import Control.Monad.Except (ExceptT, runExceptT)
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Data.Either (Either(..))
import Effect (Effect)
import Effect.Aff (Aff, Fiber, runAff)
import Effect.Aff as JS
import Effect.Aff.Class (liftAff)
import Effect.Class.Console as E
import Node.Encoding (Encoding(..))
import Node.FS.Aff as FSA

newtype AppM a = AppM (ReaderT AppEnv (ExceptT AppError Aff) a)

derive newtype instance Bind AppM

derive newtype instance Monad AppM

derive newtype instance Apply AppM

derive newtype instance Applicative AppM

derive newtype instance Functor AppM

derive newtype instance MonadError AppError AppM

derive newtype instance MonadThrow AppError AppM

instance MonadApp AppM where
  readFile x = AppM $ liftAff $ FSA.readTextFile UTF8 x
  getEnv = AppM ask
  log = AppM <<< E.log

data Result a
  = RetJSError JS.Error
  | RetAppError AppError
  | RetOk a

runAppM :: forall a. AppEnv -> AppM a -> (Result a -> Effect Unit) -> Effect (Fiber Unit)
runAppM env (AppM m) cb = m
  # flip runReaderT env
  # runExceptT
  # runAff (toResult >>> cb)
  where
  toResult = case _ of
    Left x -> RetJSError x
    Right (Left x) -> RetAppError x
    Right (Right x) -> RetOk x