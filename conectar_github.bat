@echo off
title Conectando a GitHub - Ocean Springs
echo =======================================================
echo Conectando esta carpeta con tu repositorio de GitHub...
echo =======================================================
echo.

git init
git config user.email "itadmin@oceanspringstech.com"
git config user.name "Ocean Springs Admin"
git config credential.helper store

git remote add origin https://github.com/OCEANSPRINGS/ocean-springs-web.git 2>nul
if errorlevel 1 (
    echo [Info] El remoto 'origin' ya existe. Actualizando la URL...
    git remote set-url origin https://github.com/OCEANSPRINGS/ocean-springs-web.git
)

git branch -M main
echo [Paso 1] Intentando descargar cambios del servidor...
git pull origin main

echo.
echo =======================================================
echo Proceso finalizado. Tu carpeta ya esta conectada a GitHub.
echo =======================================================
pause
