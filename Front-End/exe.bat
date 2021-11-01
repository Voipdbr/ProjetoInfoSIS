@echo off
color a
echo O servidor Web LocalHost em Angular esta em execucao.
echo Espere, por favor...........
@echo on
@echo off
TIMEOUT /T 10 /nobreak
start /max site.bat
TIMEOUT /T 50 /nobreak
ng serve
@echo off
@echo on
