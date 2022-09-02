@echo off
setlocal
set ROOT_DIR=%~dp0..\..
call "%ROOT_DIR%\node.exe" "%ROOT_DIR%\out\server-cli.js" "code" "1.71.0" "784b0177c56c607789f9638da7b6bf3230d47a8c" "code.cmd" "--openExternal" %*
endlocal
