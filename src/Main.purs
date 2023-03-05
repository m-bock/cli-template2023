module Main where

import Prelude

import App.Core as Core
import App.Monad.Impl.AppM (Result(..), runAppM)
import App.Types (AppCommand(..))
import Effect (Effect)

main :: Effect Unit
main = do
  let appEnv = { command: CmdVersion }
  _ <- runAppM appEnv Core.main case _ of
    RetJSError _ -> pure unit
    RetAppError _ -> pure unit
    RetOk _ -> pure unit
  pure unit
