@echo off
color a
cd Back-End/
cd Server/
echo Iniciando todos os trabalho.....
@echo on
@echo off
sleep 10
start exe.bat
cd ..
cd ..
start /min angular.bat
sleep 10
start /min nodemon.bat
sleep 20
cd Front-End/
sleep 10
start exe.bat
exit