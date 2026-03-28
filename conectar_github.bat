@echo off
title Conectando a GitHub
echo =======================================================
echo Conectando esta carpeta con tu repositorio de GitHub...
echo =======================================================
echo.

git init
git remote add origin https://github.com/OCEANSPRINGS/ocean-springs-web.git
git branch -M main
git pull origin main

echo.
echo =======================================================
echo Proceso finalizado. Tu carpeta ya esta conectada a GitHub.
echo =======================================================
pause
