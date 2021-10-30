@echo off
color a
echo Executando Apache e phpMyAdmin na rede local................
@echo on
@echo off
sleep 2
@echo on
cd ..\XAMPPSERVER
start xampp-control.exe
@echo off
start /min apache_start.bat
start /min mysql_start.bat
sleep 5
@echo on
start /max apresentando.bat
cd ..\Server
@echo off
sleep 30
@echo on
npm start
