module App.Types where

import Prelude

type AppConfig =
  { command :: AppCommand
  }

data AppCommand
  = CmdVersion
  | CmdHello { name :: String, enabled :: Boolean }

data AppError = ErrReadFile String