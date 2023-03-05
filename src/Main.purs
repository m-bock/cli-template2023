module Main where

import Prelude

import App.Config.Cli (parserInfoAppConfig)
import App.Core as Core
import App.Monad.Impl.AppM (Result(..), runAppM)
import App.Texts as Texts
import Effect (Effect)
import Effect.Class.Console (log)
import Node.Process as Proc
import Options.Applicative as Opt

main :: Effect Unit
main = do
  appConfig <- Opt.execParser parserInfoAppConfig
  _ <- runAppM appConfig Core.main case _ of
    RetJSError _ -> do
      log "Unexpected error"
      Proc.exit 1
    RetAppError error -> do
      log "Error:"
      log $ Texts.printError error
      Proc.exit 1
    RetOk _ -> pure unit
  pure unit
