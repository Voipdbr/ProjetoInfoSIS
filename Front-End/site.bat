@echo off
color a
echo Os dados do site ira ser liberado...
@echo on
@echo off
sleep 4
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
if "%sn%" EQU NUL (sleep -1) else (sleep 15)
sleep 20
start http://localhost:4200
echo Ok tudo funcionando....
@echo on
@echo off
exit
