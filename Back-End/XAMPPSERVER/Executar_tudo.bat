@echo off
color a
echo Executando Apache e phpMyAdmin na rede local................
@echo on
@echo off
TIMEOUT /T 2 /nobreak
@echo on
cd ..\XAMPPSERVER
start /min xampp-control.exe
@echo off
start /min apache_start.bat
start /min mysql_start.bat
TIMEOUT /T 5 /nobreak
@echo on
cd ..\Server
@echo off
TIMEOUT /T 30 /nobreak
@echo on
npm start
