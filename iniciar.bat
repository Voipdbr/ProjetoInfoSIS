@echo off
color a
cd Back-End
cd Server
echo Iniciando todos os trabalho.....
@echo on
@echo off
TIMEOUT /T 10 /nobreak
start exe.bat
cd ..
cd ..
start /min angular.bat
TIMEOUT /T 10 /nobreak
start /min nodemon.bat
TIMEOUT /T 20 /nobreak
cd Front-End
TIMEOUT /T 10 /nobreak
start exe.bat
exit