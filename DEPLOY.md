# 🚀 Guía de Despliegue - Print Partner Hub

Esta guía te ayudará a desplegar tu sitio web para que otras personas puedan verlo en línea.

## 📋 Opciones de Despliegue

### Opción 1: Vercel (⭐ RECOMENDADO - Más Fácil)

**Ventajas:**
- ✅ Gratis para siempre
- ✅ Despliegue automático desde GitHub
- ✅ Dominio personalizado incluido
- ✅ SSL automático (HTTPS)
- ✅ Muy rápido y fácil

**Pasos:**

1. **Preparar el proyecto:**
   ```bash
   # Asegúrate de estar en la carpeta del proyecto
   cd print-partner-hub-main
   
   # Construye el proyecto para verificar que funciona
   npm run build
   ```

2. **Subir a GitHub:**
   - Ve a [github.com](https://github.com) y crea una cuenta (si no tienes)
   - Crea un nuevo repositorio (botón verde "New")
   - Nómbralo: `print-partner-hub` (o el nombre que prefieras)
   - **NO** marques "Initialize with README"
   - Haz clic en "Create repository"

3. **Subir tu código:**
   ```bash
   # Inicializa git (si no lo has hecho)
   git init
   
   # Agrega todos los archivos
   git add .
   
   # Haz tu primer commit
   git commit -m "Initial commit: Print Partner Hub"
   
   # Conecta con tu repositorio (reemplaza TU-USUARIO con tu usuario de GitHub)
   git remote add origin https://github.com/TU-USUARIO/print-partner-hub.git
   
   # Sube el código
   git branch -M main
   git push -u origin main
   ```

4. **Desplegar en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Sign Up" y conéctate con GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio `print-partner-hub`
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"
   - ¡Listo! En 1-2 minutos tendrás tu sitio en línea

5. **Tu sitio estará en:**
   ```
   https://print-partner-hub.vercel.app
   ```
   (o un nombre similar que Vercel te asignará)

---

### Opción 2: Netlify (También Muy Fácil)

**Pasos:**

1. **Sigue los pasos 1-3 de Vercel** (subir a GitHub)

2. **Desplegar en Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Haz clic en "Sign up" y conéctate con GitHub
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona tu repositorio
   - Configuración:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Haz clic en "Deploy site"

3. **Tu sitio estará en:**
   ```
   https://print-partner-hub.netlify.app
   ```

---

### Opción 3: GitHub Pages (Más Configuración)

**Pasos:**

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agregar scripts a package.json:**
   Ya están agregados en el archivo `package.json`

3. **Configurar base en vite.config.ts:**
   Ya está configurado

4. **Desplegar:**
   ```bash
   npm run deploy
   ```

5. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: selecciona "gh-pages" branch
   - Save

6. **Tu sitio estará en:**
   ```
   https://TU-USUARIO.github.io/print-partner-hub/
   ```

---

## 🔧 Configuración Adicional

### Dominio Personalizado

Tanto Vercel como Netlify permiten agregar tu propio dominio:

1. **Vercel:**
   - Ve a tu proyecto → Settings → Domains
   - Agrega tu dominio
   - Sigue las instrucciones para configurar DNS

2. **Netlify:**
   - Ve a tu sitio → Domain settings
   - Agrega custom domain
   - Configura DNS según las instrucciones

---

## 📝 Notas Importantes

- ✅ El sitio se actualizará automáticamente cada vez que hagas `git push`
- ✅ Los cambios pueden tardar 1-2 minutos en aparecer
- ✅ Todos los servicios son gratuitos para proyectos personales
- ✅ El código fuente quedará público en GitHub (puedes hacerlo privado si quieres)

---

## 🆘 Solución de Problemas

**Error al hacer build:**
```bash
# Limpia y reinstala dependencias
rm -rf node_modules package-lock.json
npm install
npm run build
```

**El sitio no carga:**
- Verifica que el build se completó sin errores
- Revisa la consola del navegador (F12) para ver errores
- Asegúrate de que la ruta base esté configurada correctamente

---

## ✅ Checklist Pre-Despliegue

- [ ] El proyecto funciona localmente (`npm run dev`)
- [ ] El build funciona (`npm run build`)
- [ ] No hay errores en la consola
- [ ] Todas las imágenes y recursos cargan correctamente
- [ ] El sitio es responsive (se ve bien en móvil)

---

¡Listo! Tu sitio estará en línea y podrás compartirlo con quien quieras. 🎉

