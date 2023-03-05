module Main where

import Prelude

import App.Config.Cli (parserInfoAppConfig)
import App.Core as Core
import App.Monad.Impl.AppM (Result(..), runAppM)
import App.Types (AppCommand(..))
import Effect (Effect)
import Options.Applicative as Opt

main :: Effect Unit
main = do
  appConfig <- Opt.execParser parserInfoAppConfig
  _ <- runAppM appConfig Core.main case _ of
    RetJSError _ -> pure unit
    RetAppError _ -> pure unit
    RetOk _ -> pure unit
  pure unit
