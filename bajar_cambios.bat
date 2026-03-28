@echo off
title Descargando cambios de GitHub - Ocean Springs
echo =======================================================
echo Descargando las ultimas actualizaciones de GitHub...
echo =======================================================
echo.

echo [Paso 1] Sincronizando con el servidor...
git pull origin main

if errorlevel 1 (
    echo.
    echo =======================================================
    echo ¡ERROR! No se pudieron descargar los cambios. 
    echo Verifica tu conexion o si hay conflictos locales.
    echo =======================================================
    pause
    exit /b 1
)

echo.
if exist package.json (
    echo [Paso 2] Verificando dependencias...
    call npm install
)

echo.
echo =======================================================
echo ¡Listo! Tu proyecto esta actualizado con la version mas reciente.
echo =======================================================
pause
