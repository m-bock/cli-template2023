module App.Types where

import Prelude

type AppEnv =
  { command :: AppCommand
  }

data AppCommand
  = CmdVersion
  | CmdHello { name :: String, enabled :: Boolean }

data AppError = ErrReadFile String