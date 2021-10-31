@echo off
color a
echo O servidor Web LocalHost em Angular esta em execucao.
echo Espere, por favor...........
@echo on
@echo off
sleep 10
start /max site.bat
cd ..
sleep 60
ng serve
@echo off
@echo on
