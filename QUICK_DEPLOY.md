# ⚡ Despliegue Rápido - 5 Minutos

## 🎯 Opción Más Fácil: Vercel (Recomendado)

### Paso 1: Subir a GitHub (2 minutos)

1. **Crea cuenta en GitHub:**
   - Ve a [github.com](https://github.com) y crea cuenta

2. **Crea repositorio:**
   - Click en "+" → "New repository"
   - Nombre: `print-partner-hub`
   - **NO** marques "Initialize with README"
   - Click "Create repository"

3. **Sube tu código:**
   Abre PowerShell o Terminal en la carpeta del proyecto y ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/print-partner-hub.git
   git push -u origin main
   ```
   
   ⚠️ **Reemplaza `TU-USUARIO` con tu usuario de GitHub**

### Paso 2: Desplegar en Vercel (2 minutos)

1. **Ve a Vercel:**
   - [vercel.com](https://vercel.com)
   - Click "Sign Up" → Conecta con GitHub

2. **Importa proyecto:**
   - Click "Add New Project"
   - Selecciona `print-partner-hub`
   - Click "Deploy" (no cambies nada)

3. **¡Listo!**
   - En 1-2 minutos tendrás tu sitio en línea
   - URL: `https://print-partner-hub.vercel.app` (o similar)

---

## 📱 Compartir tu Sitio

Una vez desplegado, tendrás una URL como:
```
https://print-partner-hub.vercel.app
```

**Puedes compartir este link con quien quieras** - ¡funcionará desde cualquier dispositivo!

---

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel actualizará automáticamente tu sitio en 1-2 minutos.

---

## ❓ ¿Problemas?

**Error al hacer git push:**
- Verifica que tengas Git instalado: `git --version`
- Si no tienes Git, descárgalo de [git-scm.com](https://git-scm.com)

**Error al desplegar:**
- Asegúrate de que `npm run build` funciona sin errores
- Revisa que todos los archivos estén en GitHub

**El sitio no carga:**
- Espera 2-3 minutos (primera vez puede tardar más)
- Revisa la consola del navegador (F12)

---

## 🎉 ¡Eso es todo!

Tu sitio estará en línea y podrás compartirlo con el mundo.

