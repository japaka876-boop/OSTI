@echo off
title Subiendo cambios verificados a GitHub

echo =======================================================
echo Configurando el usuario de Git por si acaso...
echo =======================================================
git config user.email "itadmin@oceanspringstech.com"
git config user.name "Ocean Springs Admin"
git config credential.helper store

echo.
echo =======================================================
echo Iniciando el proceso de guardado y validacion...
echo =======================================================
echo.

if exist package.json (
    if not exist node_modules (
        echo [Paso 0] No se encontro la carpeta node_modules. Instalando dependencias...
        call npm install
        if errorlevel 1 (
            echo.
            echo =======================================================
            echo ¡ERROR! No se pudieron instalar las dependencias. 
            echo Revisa tu conexion a internet o los permisos.
            echo =======================================================
            pause
            exit /b 1
        )
    )
    echo [Paso 1] Ejecutando npm run lint para verificar el codigo...
    call npm run lint
    if errorlevel 1 (
        echo.
        echo =======================================================
        echo ¡ALTO AHÍ! El linter encontro problemas en tu codigo. 
        echo Revisa y corrige los errores antes de intentar subirlo.
        echo =======================================================
        pause
        exit /b 1
    )
) else (
    echo [Paso 1] No tienes Next.js todavia en esta carpeta. Saltando revisión lint.
)

echo.
echo [Paso 2] Preparando todos los archivos modificados...
git add .

echo.
echo [Paso 3] Empaquetando cambios...
set "msg=Actualizacion automatica verificada"
set /p "user_input=Ingrese mensaje del commit (Enter para usar el predeterminado): "
if not "%user_input%"=="" set "msg=%user_input%"
git commit -m "%msg%"

echo.
echo [Paso 4] Sincronizando con el servidor antes de subir...
git pull origin main

echo.
echo [Paso 5] Enviando cambios a GitHub...
git push origin main

echo.
echo =======================================================
echo ¡Listo, Papi! Tus cambios han sido enviados con exito.
echo =======================================================
pause
