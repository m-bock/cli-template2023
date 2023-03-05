module App.Config.Cli
  ( parserInfoAppConfig
  ) where

import Prelude

import App.Types (AppCommand(..), AppConfig)
import Data.Foldable (fold)
import Options.Applicative (Parser, ParserInfo, flag, helper, info, long, strOption, subparser, (<**>))
import Options.Applicative as Opt

parseAppConfig :: Parser AppConfig
parseAppConfig = ado
  command <- subparser $ fold
    [ Opt.command "hello"
        ( info
            ( ado
                name <- strOption $ fold
                  [ long "name"
                  ]
                enabled <- flag false true $ fold
                  [ long "enabled"
                  ]
                in CmdHello { name, enabled }
            )
            mempty
        )
    , Opt.command "version" (info (pure CmdVersion) mempty)
    ]
  in { command }

parserInfoAppConfig :: ParserInfo AppConfig
parserInfoAppConfig = info (parseAppConfig <**> helper) mempty