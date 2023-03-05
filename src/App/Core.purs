module App.Core where

import Prelude

import App.Monad.Class.App (class MonadApp, getConfig, log)
import App.Types (AppCommand(..))

main :: forall m. MonadApp m => m Unit
main = do
  config <- getConfig
  case config.command of
    CmdHello {} -> log "Hello!"
    CmdVersion -> log "Version"