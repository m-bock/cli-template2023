module App.Core where

import Prelude

import App.Monad.Class.App (class MonadApp, getEnv, log)
import App.Types (AppCommand(..))

main :: forall m. MonadApp m => m Unit
main = do
  env <- getEnv
  case env.command of
    CmdHello {} -> log "Hello!"
    CmdVersion -> log "Version"