# 🚀 Pasos para Desplegar en Vercel

## ✅ Paso 1: Verificar que todo funciona
✅ **COMPLETADO** - El build funciona correctamente

---

## 📝 Paso 2: Crear cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Si no tienes cuenta, haz clic en "Sign up"
3. Completa el registro (es gratis)

---

## 📦 Paso 3: Crear repositorio en GitHub

1. Una vez dentro de GitHub, haz clic en el botón **"+"** (arriba derecha)
2. Selecciona **"New repository"**
3. Configuración:
   - **Repository name:** `print-partner-hub` (o el nombre que prefieras)
   - **Description:** (opcional) "Plataforma B2B para revendedores de gigantografía"
   - **Visibility:** Public (o Private si prefieres)
   - ⚠️ **NO marques** "Add a README file"
   - ⚠️ **NO marques** "Add .gitignore"
   - ⚠️ **NO marques** "Choose a license"
4. Haz clic en **"Create repository"**

---

## 💻 Paso 4: Subir tu código a GitHub

Abre PowerShell o Terminal en la carpeta del proyecto y ejecuta estos comandos **uno por uno**:

```bash
# 1. Inicializar git (si no está inicializado)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit: Print Partner Hub"

# 4. Cambiar a rama main
git branch -M main

# 5. Conectar con tu repositorio (REEMPLAZA TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/print-partner-hub.git

# 6. Subir el código
git push -u origin main
```

⚠️ **IMPORTANTE:** En el paso 5, reemplaza `TU-USUARIO` con tu usuario real de GitHub.

**Ejemplo:** Si tu usuario es `juan123`, el comando sería:
```bash
git remote add origin https://github.com/juan123/print-partner-hub.git
```

---

## 🌐 Paso 5: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel a acceder a tus repositorios
5. Una vez dentro, haz clic en **"Add New Project"**
6. Selecciona tu repositorio `print-partner-hub`
7. **Configuración (Vercel detectará automáticamente):**
   - Framework Preset: **Vite** (debería detectarlo automáticamente)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (debería estar automático)
   - Output Directory: `dist` (debería estar automático)
   - Install Command: `npm install` (debería estar automático)
8. Haz clic en **"Deploy"**
9. Espera 1-2 minutos mientras se despliega

---

## 🎉 Paso 6: ¡Tu sitio está en línea!

Una vez completado el despliegue, verás:

✅ **Congratulations!** Tu sitio está desplegado

Tendrás una URL como:
```
https://print-partner-hub.vercel.app
```

O una URL personalizada que Vercel te asigne.

**¡Puedes compartir este link con quien quieras!** 🌍

---

## 🔄 Actualizar tu sitio

Cada vez que hagas cambios y quieras actualizar el sitio:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel actualizará automáticamente tu sitio en 1-2 minutos.

---

## ❓ Solución de Problemas

### Error: "git no se reconoce"
- Descarga Git desde [git-scm.com](https://git-scm.com/download/win)
- Instálalo y reinicia PowerShell

### Error al hacer git push
- Verifica que tu usuario de GitHub sea correcto
- Asegúrate de haber creado el repositorio primero
- Si te pide autenticación, GitHub te dará un token personal

### Error en Vercel
- Asegúrate de que `npm run build` funciona localmente
- Revisa los logs de Vercel para ver el error específico

---

## 📞 ¿Necesitas ayuda?

Si tienes algún problema en algún paso, avísame y te ayudo a resolverlo.

¡Vamos a poner tu sitio en línea! 🚀

