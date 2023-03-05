module App.Texts where

import Prelude

import App.Types (AppError(..))

printError :: AppError -> String
printError = case _ of
  ErrReadFile path -> "Cannot read file " <> path
