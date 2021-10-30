@echo off
color a
echo Em alguns segundos tudo vai estar pronto.
@echo on
@echo off
sleep 60
start http://localhost:5500/api/cars
@echo on
@echo off
sleep 4
@echo off
echo Enquanto isso voce pode verificar meu site...
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
if "%sn%" EQU NUL (sleep -1) else (sleep 25)
exit