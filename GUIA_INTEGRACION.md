# 🔗 Guía de Integración: GitHub y Tina CMS

Este documento te guiará paso a paso para conectar tu proyecto a GitHub y configurar Tina CMS.

---

## 📌 Estado Actual

🔴 **Git**: No inicializado  
🔴 **GitHub**: Sin repositorio  
🔴 **Tina CMS**: No configurado  
🔴 **Vercel**: No desplegado

---

## 1️⃣ Configuración de Git y GitHub

### Paso 1.1: Inicializar Git Local

```bash
# Navegar al directorio del proyecto
cd "c:\Users\Luis\Desktop\Pagina Maestria"

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: MDO UAGro website base implementation"
```

### Paso 1.2: Crear Repositorio en GitHub

**Opción A: Desde GitHub Web**
1. Ir a https://github.com
2. Click en "+" → "New repository"
3. Nombre sugerido: `mdo-uagro-website`
4. Descripción: "Sitio web oficial de la Maestría en Dirección de Organizaciones - UAGro"
5. **NO** inicializar con README (ya tienes uno local)
6. Click "Create repository"

**Opción B: Desde CLI (si tienes GitHub CLI)**
```bash
gh repo create mdo-uagro-website --public --source=. --description="Sitio web oficial MDO UAGro"
```

### Paso 1.3: Conectar Repositorio Local con GitHub

```bash
# Agregar remote (reemplaza TU-USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/mdo-uagro-website.git

# Cambiar nombre de rama a main (si es necesario)
git branch -M main

# Push inicial
git push -u origin main
```

### Paso 1.4: Verificar Conexión

```bash
# Ver configuración de remotes
git remote -v
```

**Resultado esperado**:
```
origin  https://github.com/TU-USUARIO/mdo-uagro-website.git (fetch)
origin  https://github.com/TU-USUARIO/mdo-uagro-website.git (push)
```

---

## 2️⃣ Configuración de Tina CMS

### Paso 2.1: Instalar Dependencias de Tina

```bash
npm install tinacms @tinacms/cli
```

### Paso 2.2: Instalar Tina en Astro

```bash
npx @tinacms/cli init
```

Esto creará:
- Directorio `tina/`
- Archivo `tina/config.ts`

### Paso 2.3: Integrar Tina con Astro

Actualizar `astro.config.mjs`:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.vercel.app', // Actualizar después del deploy
  integrations: [svelte()],
  
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Paso 2.4: Crear Directorio de Contenido

```bash
# Crear directorios para colecciones
mkdir -p src/content/profesores
mkdir -p src/content/tesis
mkdir -p src/content/convocatorias
```

### Paso 2.5: Configurar Esquema de Tina

Crear/editar `tina/config.ts`:

```typescript
import { defineConfig } from "tinacms";

// Helper para branch
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  
  // Token de acceso (configurar en Vercel)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  // Esquema de contenido
  schema: {
    collections: [
      // Colección de Profesores
      {
        name: "profesor",
        label: "Profesores",
        path: "src/content/profesores",
        format: "md",
        fields: [
          {
            type: "string",
            name: "nombre",
            label: "Nombre Completo",
            required: true,
          },
          {
            type: "string",
            name: "titulo",
            label: "Título Académico",
            required: true,
          },
          {
            type: "string",
            name: "especialidad",
            label: "Especialidad",
          },
          {
            type: "image",
            name: "foto",
            label: "Fotografía",
          },
          {
            type: "string",
            name: "colorFondo",
            label: "Color de Fondo",
            options: ["azul", "rojo", "gris"],
          },
        ],
      },
      
      // Colección de Tesis
      {
        name: "tesis",
        label: "Tesis",
        path: "src/content/tesis",
        format: "md",
        fields: [
          {
            type: "string",
            name: "alumno",
            label: "Nombre del Alumno",
            required: true,
          },
          {
            type: "string",
            name: "generacion",
            label: "Generación",
            required: true,
          },
          {
            type: "string",
            name: "tituloTesis",
            label: "Título de la Tesis",
            required: true,
          },
          {
            type: "image",
            name: "foto",
            label: "Foto del Egresado",
          },
          {
            type: "string",
            name: "archivoPdf",
            label: "Archivo PDF (URL o path relativo)",
          },
        ],
      },
      
      // Colección de Convocatorias
      {
        name: "convocatoria",
        label: "Convocatorias",
        path: "src/content/convocatorias",
        format: "md",
        fields: [
          {
            type: "string",
            name: "ano",
            label: "Año",
            required: true,
          },
          {
            type: "image",
            name: "imagenCartel",
            label: "Imagen del Cartel",
          },
          {
            type: "string",
            name: "pdfBases",
            label: "PDF de Bases (URL)",
          },
          {
            type: "string",
            name: "linkPreregistro",
            label: "Link de Pre-registro",
          },
          {
            type: "object",
            name: "fechas",
            label: "Fechas Importantes",
            list: true,
            fields: [
              {
                type: "datetime",
                name: "fecha",
                label: "Fecha",
              },
              {
                type: "string",
                name: "descripcion",
                label: "Descripción",
              },
            ],
          },
        ],
      },
      
      // Páginas editables
      {
        name: "page",
        label: "Páginas",
        path: "src/content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

### Paso 2.6: Agregar Scripts de Tina

Actualizar `package.json`:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"astro dev\"",
    "build": "tinacms build && astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Paso 2.7: Crear Archivos de Ejemplo

Para probar Tina, crea archivos markdown de ejemplo:

**`src/content/profesores/ejemplo.md`**:
```markdown
---
nombre: "Dr. Ejemplo"
titulo: "Doctor en Administración"
especialidad: "Gestión Organizacional"
colorFondo: "azul"
---
```

**`src/content/tesis/ejemplo.md`**:
```markdown
---
alumno: "Juan Pérez"
generacion: "2020-2022"
tituloTesis: "Modelo de gestión para PyMEs"
---
```

### Paso 2.8: Actualizar .gitignore

Agregar a `.gitignore`:

```
# Tina
.tina/__generated__
admin/
```

### Paso 2.9: Probar Tina Localmente

```bash
# Iniciar servidor de desarrollo con Tina
npm run dev
```

Acceder a:
- Sitio web: `http://localhost:4321`
- Admin panel: `http://localhost:4321/admin`

---

## 3️⃣ Configuración de Tina Cloud (Autenticación)

### Paso 3.1: Crear Cuenta en Tina Cloud

1. Ir a https://app.tina.io/
2. Registrarse con GitHub
3. Crear nuevo proyecto "MDO UAGro"

### Paso 3.2: Obtener Credenciales

En el dashboard de Tina Cloud:
- **Client ID**: Copiar de la configuración del proyecto
- **Token**: Generar nuevo token

### Paso 3.3: Configurar Variables de Entorno Locales

Crear `.env.local`:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=tu-client-id-aqui
TINA_TOKEN=tu-token-aqui
GITHUB_BRANCH=main
```

⚠️ **NO** commitear este archivo (ya está en .gitignore)

### Paso 3.4: Configurar en Tina Cloud

En Tina Cloud dashboard:
1. Connect to GitHub → Seleccionar tu repositorio
2. Configure branches → `main`
3. Save configuration

---

## 4️⃣ Deploy en Vercel

### Paso 4.1: Crear Cuenta en Vercel

1. Ir a https://vercel.com
2. Registrarse con GitHub

### Paso 4.2: Importar Proyecto

1. Click "Add New..." → "Project"
2. Import Git Repository → Buscar `mdo-uagro-website`
3. Click "Import"

### Paso 4.3: Configurar Build Settings

Vercel detectará Astro automáticamente:

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Paso 4.4: Agregar Variables de Entorno

En "Environment Variables":

```
NEXT_PUBLIC_TINA_CLIENT_ID = tu-client-id
TINA_TOKEN = tu-token
```

### Paso 4.5: Deploy

1. Click "Deploy"
2. Esperar ~2 minutos
3. ✅ Sitio disponible en `https://mdo-uagro-website.vercel.app`

### Paso 4.6: Configurar Dominio Personalizado (Opcional)

Si tienes un dominio:
1. Settings → Domains
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones

---

## 5️⃣ Workflow de Trabajo con Tina CMS

### Para Editores (Coordinadora del Programa)

1. Acceder a `https://tu-sitio.vercel.app/admin`
2. Login con GitHub (si está configurado)
3. Editar contenido visualmente
4. Click "Save" → Crea commit automático en GitHub
5. Vercel redeploya automáticamente

### Para Desarrolladores

```bash
# Pull últimos cambios
git pull

# Trabajar localmente
npm run dev

# Hacer cambios en código
# ...

# Commit y push
git add .
git commit -m "Descripción de cambios"
git push
```

---

## ✅ Checklist Final

### Git y GitHub
- [ ] `git init` ejecutado
- [ ] Repositorio creado en GitHub
- [ ] Remote configurado
- [ ] Push inicial completado
- [ ] `.gitignore` configurado correctamente

### Tina CMS
- [ ] Dependencias instaladas
- [ ] `tina/config.ts` configurado
- [ ] Directorios de contenido creados
- [ ] Archivos de ejemplo creados
- [ ] Tina Cloud cuenta creada
- [ ] Client ID y Token obtenidos
- [ ] `.env.local` configurado
- [ ] Panel admin funcional localmente

### Vercel
- [ ] Cuenta creada
- [ ] Proyecto importado desde GitHub
- [ ] Variables de entorno configuradas
- [ ] Deploy exitoso
- [ ] Sitio accesible públicamente
- [ ] Auto-deploy en push configurado

---

## 🆘 Troubleshooting Común

### Error: "git not found"
```bash
# Instalar Git para Windows
winget install Git.Git
```

### Error: Tina no carga en `/admin`
- Verificar que npm run build se ejecutó correctamente
- Revisar que las variables de entorno estén configuradas
- Limpiar caché: `rm -rf .tina/__generated__`

### Error: Vercel build falla
- Revisar logs en Vercel dashboard
- Verificar que todas las dependencias estén en `package.json`
- Asegurar que variables de entorno estén configuradas

### Error: "Image not found" en Tina
- Verificar que `publicFolder` esté configurado correctamente
- Revisar permisos de la carpeta `public/images`

---

## 📚 Recursos Adicionales

- **Astro Docs**: https://docs.astro.build
- **Tina CMS Docs**: https://tina.io/docs/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com

---

## 🎯 Próximos Pasos Después de la Configuración

1. Migrar contenido hardcoded a Tina
2. Capacitar a la coordinadora en uso de Tina
3. Subir fotos de profesores vía Tina
4. Crear convocatoria 2026 en Tina
5. Agregar tesis al repositorio

---

**Autor**: Equipo de Desarrollo MDO  
**Última actualización**: 19 de enero de 2026  
**Versión**: 1.0
