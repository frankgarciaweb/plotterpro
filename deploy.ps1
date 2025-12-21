# Script de ayuda para desplegar en Vercel
# Ejecuta este script después de crear tu repositorio en GitHub

Write-Host "🚀 Script de Despliegue para Vercel" -ForegroundColor Cyan
Write-Host ""

# Verificar si git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git no está instalado" -ForegroundColor Red
    Write-Host "Por favor instala Git desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "📝 Por favor ingresa tu información:" -ForegroundColor Cyan
Write-Host ""

# Solicitar usuario de GitHub
$githubUser = Read-Host "Tu usuario de GitHub (ejemplo: juan123)"

if ([string]::IsNullOrWhiteSpace($githubUser)) {
    Write-Host "❌ Debes ingresar tu usuario de GitHub" -ForegroundColor Red
    exit
}

# Solicitar nombre del repositorio
$repoName = Read-Host "Nombre del repositorio [print-partner-hub]"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "print-partner-hub"
}

Write-Host ""
Write-Host "🔧 Configurando Git..." -ForegroundColor Cyan

# Inicializar git si no está inicializado
if (-not (Test-Path .git)) {
    git init
    Write-Host "✅ Git inicializado" -ForegroundColor Green
}

# Agregar todos los archivos
Write-Host "📦 Agregando archivos..." -ForegroundColor Cyan
git add .

# Hacer commit
Write-Host "💾 Haciendo commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Print Partner Hub" 2>&1 | Out-Null

# Cambiar a rama main
git branch -M main

# Verificar si ya existe el remote
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    # Agregar remote
    Write-Host "🔗 Conectando con GitHub..." -ForegroundColor Cyan
    git remote add origin "https://github.com/$githubUser/$repoName.git"
    Write-Host "✅ Conectado con GitHub" -ForegroundColor Green
} else {
    Write-Host "⚠️  Ya existe un remote. Actualizando..." -ForegroundColor Yellow
    git remote set-url origin "https://github.com/$githubUser/$repoName.git"
}

Write-Host ""
Write-Host "📤 Subiendo código a GitHub..." -ForegroundColor Cyan
Write-Host ""

# Intentar hacer push
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡Código subido exitosamente a GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Siguiente paso:" -ForegroundColor Cyan
    Write-Host "1. Ve a https://vercel.com" -ForegroundColor White
    Write-Host "2. Haz clic en 'Sign Up' y conéctate con GitHub" -ForegroundColor White
    Write-Host "3. Haz clic en 'Add New Project'" -ForegroundColor White
    Write-Host "4. Selecciona tu repositorio: $repoName" -ForegroundColor White
    Write-Host "5. Haz clic en 'Deploy'" -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 ¡Tu sitio estará en línea en 1-2 minutos!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Error al subir el código" -ForegroundColor Red
    Write-Host ""
    Write-Host "Posibles causas:" -ForegroundColor Yellow
    Write-Host "- El repositorio no existe en GitHub. Créalo primero en github.com" -ForegroundColor White
    Write-Host "- Problemas de autenticación. GitHub puede pedirte un token" -ForegroundColor White
    Write-Host ""
    Write-Host "Revisa el archivo PASOS_VERCEL.md para más ayuda" -ForegroundColor Cyan
}

