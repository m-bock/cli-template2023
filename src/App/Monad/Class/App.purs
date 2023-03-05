module App.Monad.Class.App where

import Prelude

import App.Types (AppEnv, AppError)
import Control.Monad.Error.Class (class MonadError)

class (MonadError AppError m) <= MonadApp m where
  readFile :: String -> m String
  log :: String -> m Unit
  getEnv :: m AppEnv