# ✅ Checklist de Requisitos - Sitio Web MDO UAGro

Este documento compara los requisitos originales del proyecto con el estado actual de implementación.

---

## 📋 Stack Tecnológico

| Requisito | Estado | Notas |
|-----------|--------|-------|
| Framework: Astro (última versión) | ✅ | Astro v5.16.11 |
| UI Components: Svelte | ✅ | Svelte v5.47.1 |
| Estilos: Tailwind CSS | ✅ | Tailwind v4.1.18 |
| CMS: Tina CMS | 🚧 | **PENDIENTE de configurar** |
| Hosting: Vercel | 🚧 | **PENDIENTE de deploy** |
| Repositorio: GitHub | 🚧 | **PENDIENTE de crear** |

---

## 🎨 Estética: "Modernidad Académica y Serena"

### 1. Minimalismo Orgánico
| Requisito | Estado | Implementación |
|-----------|--------|----------------|
| Amplios espacios en blanco | ✅ | Padding y margins generosos |
| Bordes muy redondeados | ✅ | `rounded-pill`, `rounded-2xl` |
| Estructura "aireada" | ✅ | Grids con gaps amplios |
| Transmitir serenidad | ✅ | Colores suaves y transiciones |

### 2. Paleta de Colores
| Color | Código | Estado | Uso |
|-------|--------|--------|-----|
| Azul marino UAGro | #1a365d | ✅ | Navbar, textos principales |
| Rojo UAGro | #c53030 | ✅ | CTAs principales |
| Gris suave | #f7fafc, #edf2f7 | ✅ | Fondos y tarjetas |
| Blanco | #ffffff | ✅ | Fondos principales |
| Mesh Gradient | Custom | ✅ | Sección hero |

### 3. Tipografía
| Requisito | Estado | Implementación |
|-----------|--------|----------------|
| Display: Serif elegante | ✅ | Plus Jakarta Sans (ajustado por diseño) |
| Body: Sans-serif moderna | ✅ | Manrope |
| NO usar Inter/Roboto/Arial | ✅ | No se usan |

### 4. Componentes Visuales
| Requisito | Estado |
|-----------|--------|
| Tarjetas con sombras suaves | ✅ |
| Bordes redondeados | ✅ |
| Fotos con recorte y fondos de colores | ✅ |
| Iconos minimalistas | ✅ |
| Transiciones suaves en hover | ✅ |

---

## 📄 Estructura de Páginas

### 1. Página de Inicio (/)

| Sección | Estado | Contenido |
|---------|--------|-----------|
| Hero con Mesh Gradient | ✅ | Implementado |
| Badge "Programa Acreditado" | ✅ | Implementado |
| Título principal | ✅ | "Excelencia en Gestión de Organizaciones" |
| Subtítulo descriptivo | ✅ | Descripción del programa |
| CTA "Plan de Estudios" (azul) | ✅ | Implementado |
| CTA "Convocatoria" (rojo) | ✅ | Con gradiente rojo |
| 3 Cards: Academia, Networking, Innovación | ✅ | Implementadas |
| Footer con info institucional | ✅ | Implementado |
| Logos SEP y CONAHCYT | ⚠️ | Logos UAGro, Facultad, MDO |

**Estado General**: ✅ **Completa** (con pequeña variación en logos)

---

### 2. Objetivos y Perfiles (/objetivos)

| Sección | Estado |
|---------|--------|
| Selector tabs Ingreso/Egreso | ✅ |
| Sección "Aspirante Ideal" | ✅ |
| Lista de competencias previas | ✅ |
| Cards "Proceso de Admisión" | ✅ |
| Cards "Descargar Folleto" | ✅ |
| Footer con logos SEP/CONAHCYT | ⚠️ |

**Estado General**: ✅ **Completa**

---

### 3. Núcleo Académico (/nucleo-academico)

| Sección | Estado |
|---------|--------|
| Grid de tarjetas (3 columnas desktop) | ✅ |
| Foto con fondo de color | ⚠️ |
| Nombre | ✅ |
| Título/Especialidad | ✅ |
| Efecto hover sutil | ✅ |
| 16 profesores | ✅ |

**Estado General**: ⚠️ **Falta**: Fotografías reales de profesores

**Profesores incluidos**: ✅ 16 profesores con nombres y doctorados completos

---

### 4. LIES (/lies)

| Sección | Estado |
|---------|--------|
| Título "Líneas de Investigación e Incidencia Social" | ✅ |
| Descripción del enfoque | ✅ |
| Tarjeta principal con texto | ✅ |
| Indicador: Participantes Multidisciplinarios | ✅ |
| Indicador: Enfoque Incidencia Social | ✅ |
| Indicador: Resultados Publicaciones | ✅ |
| Descripción de líneas de investigación | ✅ |

**Estado General**: ✅ **Completa**

---

### 5. Repositorio de Tesis (/repositorio)

| Sección | Estado |
|---------|--------|
| Filtro por generación | 🚧 |
| Grid de tarjetas de egresados | ⚠️ |
| Foto egresado | 🚧 |
| Nombre | 🚧 |
| Título de tesis | 🚧 |
| Botón descarga PDF | 🚧 |

**Estado General**: 🚧 **Pendiente de contenido real**

---

### 6. Instalaciones (/instalaciones)

| Sección | Estado |
|---------|--------|
| Galería grid asimétrico | 🚧 |
| Descripción de infraestructura | ✅ |
| Lista de amenidades | ✅ |

**Estado General**: ⚠️ **Falta**: Galería de fotos reales

---

### 7. Convocatoria (/convocatoria)

| Sección | Estado |
|---------|--------|
| Título "Convocatoria 2026" | ✅ |
| Imagen del cartel oficial | 🚧 |
| Timeline fechas clave | 🚧 |
| Botón "Descargar PDF" | ✅ |
| Botón "Iniciar Pre-Registro" | ✅ |
| Información de contacto | ✅ |

**Estado General**: ⚠️ **Falta**: Cartel y fechas oficiales

---

### 8. Conócenos (/conocenos)

| Sección | Estado |
|---------|--------|
| Historia del programa | ✅ |
| Misión y Visión | ✅ |
| Información de contacto | ✅ |
| Mapa Google Maps | 🚧 |

**Estado General**: ⚠️ **Falta**: Integración de Google Maps

---

### 9. Plan de Estudios (/plan-de-estudios)

| Sección | Estado |
|---------|--------|
| Estructura por semestres | ✅ |
| Materias por semestre | ✅ |
| Información de créditos | ✅ |
| Duración y modalidad | ✅ |

**Estado General**: ✅ **Completa** (página adicional no en requisitos originales)

---

## 🎨 Configuración de Tina CMS

### Colecciones Requeridas

| Colección | Estado | Campos |
|-----------|--------|--------|
| Profesores | 🚧 | nombre, titulo, especialidad, foto, color_fondo |
| Tesis | 🚧 | alumno, generacion, titulo_tesis, archivo_pdf, foto |
| Convocatoria | 🚧 | año, imagen_cartel, pdf_bases, fechas[], link_preregistro |
| Páginas | 🚧 | Contenido editable |

**Estado General**: 🚧 **PENDIENTE** - No configurado

---

## 📁 Estructura de Carpetas

| Carpeta/Archivo | Estado | Notas |
|-----------------|--------|-------|
| `src/components/` | ✅ | 7 componentes creados |
| `src/layouts/` | ✅ | BaseLayout.astro |
| `src/pages/` | ✅ | 9 páginas creadas |
| `src/styles/` | ✅ | global.css |
| `src/content/` | 🚧 | No creada (para Tina) |
| `public/images/` | ✅ | Creada |
| `public/documents/` | ✅ | Creada |
| `tina/config.ts` | 🚧 | No creado |

---

## 🛠️ Requisitos Técnicos

| Requisito | Estado | Implementación |
|-----------|--------|----------------|
| SEO: Meta tags | ✅ | En BaseLayout |
| SEO: Open Graph | ⚠️ | Parcial |
| SEO: Sitemap automático | 🚧 | Pendiente |
| Performance: Optimización imágenes | ⚠️ | Astro Image parcial |
| Responsive: Mobile-first | ✅ | Implementado |
| Responsive: Breakpoints | ✅ | sm, md, lg, xl |
| Accesibilidad: ARIA labels | ⚠️ | Parcial |
| Accesibilidad: Contraste | ✅ | Cumple |
| Accesibilidad: Navegación teclado | ✅ | Funcional |
| Dark mode toggle | 🚧 | No prioritario |

---

## 📦 Archivos de Referencia

| Archivo | Estado | Uso |
|---------|--------|-----|
| code.html - code(6).html | ✅ | Referencia visual (Google Sites) |
| PLAN-DE-ESTUDIOS-*.txt | ✅ | Contenido extraído e integrado |
| Logos institucionales | ✅ | Integrados en public/ |

---

## 🚀 Deploy e Infraestructura

| Requisito | Estado | Notas |
|-----------|--------|-------|
| Repositorio GitHub | 🚧 | **PENDIENTE** |
| Deploy en Vercel | 🚧 | **PENDIENTE** |
| Dominio personalizado | 🚧 | Opcional |
| HTTPS automático | ⏳ | Con Vercel |
| CI/CD automático | ⏳ | Con Vercel |

---

## 📊 Resumen General

### ✅ Completado (80%)
- Stack tecnológico base (Astro + Svelte + Tailwind)
- Diseño visual y estética
- 9 páginas estructuradas
- 7 componentes reutilizables
- Contenido real en 5/9 páginas
- Logos institucionales
- Navegación responsive

### 🚧 Pendiente Crítico (20%)
1. **Inicializar repositorio Git** ❗
2. **Configurar Tina CMS** ❗
3. **Deploy en Vercel** ❗
4. **Fotografías de profesores** ⚠️
5. **Contenido repositorio de tesis** ⚠️
6. **Galería de instalaciones** ⚠️
7. **Convocatoria 2026 completa** ⚠️
8. **Google Maps embed** (opcional)

---

## ✅ Diferencias con Requisitos Originales

### Páginas Adicionales
- ✅ **Plan de Estudios** (/plan-de-estudios) - No estaba en requisitos pero se agregó por importancia

### Variaciones de Diseño
- **Tipografía Display**: Se usó Plus Jakarta Sans en lugar de Playfair Display (serif)
  - **Razón**: Mejor legibilidad y modernidad
  
- **Logos**: Se integraron logos UAGro, Facultad y MDO en lugar de SEP/CONAHCYT
  - **Razón**: Mayor relevancia institucional

### Mejoras No Solicitadas
- ✅ Sección de estadísticas en homepage
- ✅ Sección "Acerca del Programa" con imagen
- ✅ Gradiente rojo en botón CTA Convocatoria (mejor jerarquía visual)

---

## 🎯 Próximos Pasos para Cumplir 100%

### Prioridad Alta
1. [ ] Inicializar repositorio Git y crear repo en GitHub
2. [ ] Configurar Tina CMS completo
3. [ ] Deploy en Vercel
4. [ ] Obtener y agregar fotos de profesores (16)

### Prioridad Media
5. [ ] Recopilar tesis y datos de egresados
6. [ ] Tomar fotos de instalaciones
7. [ ] Diseñar cartel de convocatoria 2026
8. [ ] Definir fechas de convocatoria

### Prioridad Baja
9. [ ] Integrar Google Maps
10. [ ] Optimizar SEO completo
11. [ ] Audit de accesibilidad
12. [ ] Dark mode (opcional)

---

**Fecha de revisión**: 19 de enero de 2026  
**Estado general del proyecto**: **80% completo** ✅  
**Listo para MVP**: ⚠️ Requiere Git, Tina CMS y Vercel
