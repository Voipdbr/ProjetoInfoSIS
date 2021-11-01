@echo off
color a
echo Os dados do site ira ser liberado...
@echo on
@echo off
TIMEOUT /T 4 /nobreak
@echo off
echo Enquanto isso voce pode navegar pelo site do criador desse projeto...
@echo on
@echo off
echo Deseja abrir meu site???
@echo on
@echo off
echo Se sim digitar(S) se nao digitar(N)
@echo on
@echo off
set /p sn="Digite o que deseja:"
echo:
if "%sn%" EQU "S" (start http://ismaeljose.site) else (echo Que pena entao tudo bem.)
if "%sn%" EQU "S" (echo Ok, Obrigado entao)
if "%sn%" EQU NUL (TIMEOUT /T -1 /nobreak) else (TIMEOUT /T 15 /nobreak)
TIMEOUT /T 20 /nobreak
start http://localhost:4200
echo Ok tudo funcionando....
@echo on
@echo off
exit
