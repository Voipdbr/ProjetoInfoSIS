@echo off
color a
echo Parando Apache e phpMyAdmin na rede local................
@echo on
@echo off
sleep 2
@echo on
cd ..\XAMPPSERVER
start xampp-control.exe
@echo off
start /min apache_stop.bat
start /min mysql_stop.bat
sleep 5
exit
