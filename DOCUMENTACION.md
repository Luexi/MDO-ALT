# Documentación Completa - Sitio Web MDO UAGro

## 📋 Índice
1. [Idea del Proyecto](#idea-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estética y Diseño](#estética-y-diseño)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Páginas del Sitio](#páginas-del-sitio)
6. [Componentes](#componentes)
7. [Estado Actual del Proyecto](#estado-actual-del-proyecto)
8. [Pendientes](#pendientes)

---

## 🎯 Idea del Proyecto

### Contexto
El sitio web de la **Maestría en Dirección de Organizaciones (MDO)** de la Universidad Autónoma de Guerrero (UAGro) es una solución moderna que reemplaza el anterior sitio en Joomla que estaba caído.

### Objetivos Principales
- Crear un sitio web moderno, rápido y accesible
- Permitir la gestión de contenido sin conocimientos técnicos a través de CMS
- Presentar el programa de maestría de forma profesional y atractiva
- Optimizar para SEO y rendimiento
- Facilitar el proceso de admisión para futuros estudiantes

### Público Objetivo
- **Aspirantes a la maestría**: Profesionales interesados en estudios de posgrado
- **Estudiantes actuales**: Acceso a recursos e información del programa
- **Investigadores**: Consulta de líneas de investigación y tesis publicadas
- **Comunidad académica**: Información sobre el núcleo académico y publicaciones

---

## 🚀 Stack Tecnológico

### Frontend
- **Framework**: Astro v5.x
  - Generación de sitios estáticos (SSG)
  - Renderizado del lado del servidor (SSR)
  - Optimización automática de imágenes y assets
  - Excelente rendimiento y SEO

- **UI Components**: Svelte v5.x
  - Componentes reactivos e interactivos
  - Bundle pequeño y eficiente
  - Sintaxis simple y legible

- **Estilos**: Tailwind CSS v4.x
  - Utility-first CSS framework
  - Personalización con colores institucionales
  - Diseño responsivo integrado

### CMS (Pendiente de Configuración)
- **Tina CMS**
  - Editor visual en tiempo real
  - Gestión de contenido basada en Git
  - Panel de administración en `/admin`
  - Colecciones para profesores, tesis y convocatorias

### Hosting (Pendiente)
- **Vercel**
  - Deploy automático desde GitHub
  - CDN global para mejor rendimiento
  - HTTPS automático
  - Preview deployments para cambios

### Control de Versiones (Pendiente)
- **GitHub**
  - Repositorio del código fuente
  - Colaboración en equipo
  - Integración con Vercel y Tina CMS

---

## 🎨 Estética y Diseño

### Concepto Visual: "Modernidad Académica y Serena"

El diseño sigue una filosofía de **minimalismo orgánico** que transmite:
- Serenidad y enfoque académico
- Profesionalismo y credibilidad
- Innovación y modernidad

### Pilares Visuales

#### 1. Minimalismo Orgánico
- **Espacios en blanco amplios**: Reducción de carga cognitiva
- **Bordes redondeados**: Estilo "píldora" en navegación y botones
- **Estructura aireada**: Contenido respirable y fácil de naviar
- **Sombras suaves**: Profundidad sutil sin sobrecarga visual

#### 2. Paleta de Colores Institucional

| Color | Código Hex | Uso |
|-------|-----------|-----|
| **Azul Marino UAGro** | `#1a365d` | Color primario, textos principales, navbar |
| **Rojo UAGro** | `#c53030` | **SOLO** CTAs principales y botones de acción |
| **Gris Claro** | `#f7fafc` | Fondos de secciones |
| **Gris Medio** | `#edf2f7` | Fondos de tarjetas |
| **Blanco** | `#ffffff` | Fondos principales |

**Mesh Gradient**: Degradado de malla sutil que combina azul marino, rojo y gris como fondo en secciones hero.

#### 3. Tipografía

- **Display (Títulos principales)**: 
  - **Plus Jakarta Sans** - Moderna, limpia, geométrica
  - Uso: h1, h2, títulos destacados
  
- **Body (Cuerpo de texto)**:
  - **Manrope** - Sans-serif equilibrada y legible
  - Uso: Párrafos, descripciones, contenido general

**Jerarquía de Tamaños**:
- H1: 3xl-4xl (móvil-desktop)
- H2: 2xl-3xl
- H3: xl-2xl
- Body: base-lg

#### 4. Componentes Visuales

- **Tarjetas**:
  - Bordes redondeados (rounded-2xl)
  - Sombras suaves (shadow-md, shadow-lg)
  - Padding generoso
  - Hover states con transiciones suaves

- **Botones**:
  - Estilo píldora (rounded-pill)
  - Dos variantes:
    - Primarios: Azul UAGro o Rojo UAGro
    - Secundarios: Outline con borde
  - Estados hover con escalado sutil

- **Fotos de Profesores**:
  - Recorte circular o redondeado
  - Fondos de colores sólidos (azul, rojo, gris)
  - Efecto hover con elevación

- **Iconos**:
  - Minimalistas y consistentes
  - SVG inline para mejor rendimiento
  - Tamaño consistente (w-5 h-5, w-7 h-7)

#### 5. Interacciones y Animaciones

- **Transiciones suaves**: 200-300ms
- **Hover states**: Cambios de color, escalado, sombras
- **Animaciones sutiles**: Entrada de elementos al scroll
- **Navegación sticky**: Navbar fijo con efecto glassmorphism

---

## 📁 Estructura del Proyecto

```
mdo-uagro/
├── src/
│   ├── components/              # Componentes Svelte reutilizables
│   │   ├── Navbar.svelte       # Navegación principal
│   │   ├── Footer.svelte       # Pie de página
│   │   ├── HeroSection.svelte  # Sección hero de inicio
│   │   ├── ProfesorCard.svelte # Tarjeta de profesor
│   │   ├── TesisCard.svelte    # Tarjeta de tesis
│   │   ├── FeatureCard.svelte  # Tarjeta de características
│   │   └── TabSelector.svelte  # Selector de pestañas
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout base con meta tags y estructura HTML
│   │
│   ├── pages/                   # Páginas del sitio (route-based)
│   │   ├── index.astro         # Página de inicio (/)
│   │   ├── objetivos.astro     # Objetivos y perfiles (/objetivos)
│   │   ├── nucleo-academico.astro  # Núcleo académico (/nucleo-academico)
│   │   ├── lies.astro          # Líneas de investigación (/lies)
│   │   ├── plan-de-estudios.astro  # Plan de estudios (/plan-de-estudios)
│   │   ├── repositorio.astro   # Repositorio de tesis (/repositorio)
│   │   ├── instalaciones.astro # Instalaciones (/instalaciones)
│   │   ├── convocatoria.astro  # Convocatoria (/convocatoria)
│   │   └── conocenos.astro     # Acerca del programa (/conocenos)
│   │
│   └── styles/
│       └── global.css          # Estilos globales y configuración Tailwind
│
├── public/                      # Archivos estáticos
│   ├── logo-uagro.png          # Logo Universidad Autónoma de Guerrero
│   ├── logo-facultad.png       # Logo Facultad de Contaduría y Administración
│   ├── logo-mdo.png            # Logo Maestría en Dirección de Organizaciones
│   ├── images/                 # Imágenes del sitio
│   └── documents/              # PDFs y documentos descargables
│
├── contenido real/              # Carpeta con contenido fuente
│   ├── PLAN-DE-ESTUDIOS-CON-CORRECIONES-1-95-_1_.txt
│   ├── JORNADA_ACADEMICA_2025__2_-removebg-preview.png
│   ├── MDO LOGO SIN FONDO.png
│   └── recurso-8.png
│
├── tina/                        # 🚧 PENDIENTE: Configuración de Tina CMS
│   └── config.ts               # Esquema de colecciones y campos
│
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.mjs         # Configuración de Tailwind CSS
├── package.json                # Dependencias del proyecto
├── svelte.config.js            # Configuración de Svelte
├── tsconfig.json               # Configuración de TypeScript
└── README.md                   # Documentación básica
```

### Convenciones de Nombres

- **Componentes**: PascalCase (ej. `ProfesorCard.svelte`)
- **Páginas**: kebab-case (ej. `nucleo-academico.astro`)
- **Utilidades**: camelCase (ej. `formatDate()`)
- **Assets**: kebab-case (ej. `logo-uagro.png`)

---

## 📄 Páginas del Sitio

### 1. Inicio (`/` - index.astro)

**Propósito**: Landing page principal que presenta el programa de forma atractiva.

**Secciones**:
- ✅ **Hero Section**:
  - Mesh gradient de fondo
  - Badge "Programa Acreditado de Calidad"
  - Título principal: "Excelencia en Gestión de Organizaciones"
  - Subtítulo descriptivo
  - Dos CTAs: "Plan de Estudios" (azul) y "Convocatoria" (rojo con gradiente)
  
- ✅ **Features (3 tarjetas)**:
  - Academia Rigurosa
  - Networking
  - Innovación
  
- ✅ **Acerca del Programa**:
  - Grid de 2 columnas
  - Imagen ilustrativa
  - Badge "25+ Años de trayectoria"
  - Descripción del objetivo y enfoque
  
- ✅ **Estadísticas**:
  - 16 Profesores Investigadores
  - 100% Con Doctorado
  - 2 Líneas de Investigación
  - 4 Semestres
  
- ✅ **Logos Institucionales**:
  - Logo UAGro
  - Logo Facultad de Contaduría y Administración
  - Logo MDO
  - Efecto grayscale con hover
  
- ✅ **CTA Final**:
  - "Descargar Folleto" (outline)
  - "Ver Convocatoria 2026" (gradiente rojo)

**Estado**: ✅ **Completada** - Contenido real integrado

---

### 2. Objetivos y Perfiles (`/objetivos` - objetivos.astro)

**Propósito**: Presentar el objetivo general del programa y los perfiles de ingreso/egreso.

**Secciones**:
- ✅ **Hero con Objetivo General**:
  - Título destacado
  - Objetivo del programa extraído del plan de estudios oficial
  
- ✅ **Tabs/Pestañas**:
  - "Perfil de Ingreso"
  - "Perfil de Egreso"
  
- ✅ **Perfil de Ingreso**:
  - Descripción del aspirante ideal
  - Conocimientos previos requeridos
  - Habilidades esperadas
  - Actitudes valoradas
  
- ✅ **Perfil de Egreso**:
  - Conocimientos que adquirirá el egresado
  - Habilidades desarrolladas
  - Actitudes fomentadas
  - Competencias profesionales
  
- ✅ **CTAs Adicionales**:
  - "Proceso de Admisión"
  - "Descargar Folleto"

**Estado**: ✅ **Completada** - Contenido real del plan de estudios integrado

---

### 3. Núcleo Académico (`/nucleo-academico` - nucleo-academico.astro)

**Propósito**: Presentar a los profesores investigadores del programa.

**Secciones**:
- ✅ **Hero Section**:
  - Título: "Nuestro Núcleo Académico"
  - Descripción de la excelencia académica
  
- ✅ **Grid de Profesores** (3 columnas en desktop):
  - 16 profesores investigadores
  - Cada tarjeta incluye:
    - Nombre completo
    - Grado académico (Doctorado en...)
    - Foto: 🚧 **Pendiente** (actualmente placeholders de colores)
    - Fondo de color (azul, rojo o gris)
    - Efecto hover con elevación

**Estado**: ⚠️ **Parcialmente completa**
- ✅ Nombres y doctorados actualizados con datos reales
- 🚧 Faltan fotografías de los profesores

**Profesores Listados**:
1. Dr. Aristeo Santos López
2. Dra. Blanca Rosa García Rivera
3. Dr. Efraín Flores Zúñiga
4. Dra. Eréndira Fierro Moreno
5. Dra. Erika Cruz Coria
6. Dr. Guilibaldo Colón González
7. Dr. Heriberto Morales Escudero
8. Dr. Jesús Eduardo Oliva Abarca
9. Dr. José Antonio Ramírez Zarate
10. Dra. Lilia Alejandra Flores Castillo
11. Dra. María Dolores Martínez García
12. Dr. Roberto Celaya Figueroa
13. Dr. Rodolfo Jiménez Morquecho
14. Dra. Rocío Montes Cuenca
15. Dra. Silvia María Niembro García
16. Dra. Yazmín Guadalupe Montiel Andrade

---

### 4. LIES - Líneas de Investigación (`/lies` - lies.astro)

**Propósito**: Presentar las Líneas de Investigación e Incidencia Social del programa.

**Secciones**:
- ✅ **Hero Section**:
  - Título destacado
  - Subtítulo explicativo
  
- ✅ **Descripción General**:
  - Enfoque de investigación del programa
  - Impacto social y vinculación
  
- ✅ **Líneas de Investigación**:
  
  **LGAC 1: Modelos Estratégicos de Dirección Organizacional**
  - Descripción detallada
  - Objetivos de investigación
  - Profesor asociado
  
  **LGAC 2: Desempeño Organizacional Gestión del Talento Humano**
  - Descripción detallada
  - Objetivos de investigación
  - Profesor asociado
  
- ✅ **Indicadores**:
  - Participantes multidisciplinarios
  - Enfoque en incidencia social
  - Resultados y publicaciones

**Estado**: ✅ **Completada** - Contenido real del plan de estudios integrado

---

### 5. Plan de Estudios (`/plan-de-estudios` - plan-de-estudios.astro)

**Propósito**: Detallar la estructura curricular del programa por semestre.

**Secciones**:
- ✅ **Hero Section**:
  - Título: "Plan de Estudios"
  - Información general (duración, modalidad, créditos)
  
- ✅ **Estructura por Semestres**:
  
  **Primer Semestre**:
  - Teoría Organizacional
  - Habilidades Directivas I
  - Metodología de la Investigación I
  - Seminario de Investigación I
  
  **Segundo Semestre**:
  - Modelos de Gestión Organizacional
  - Habilidades Directivas II
  - Metodología de la Investigación II
  - Seminario de Investigación II
  
  **Tercer Semestre**:
  - Gestión del Desempeño Organizacional
  - Administración del Talento Humano
  - Optativa I
  - Seminario de Investigación III
  
  **Cuarto Semestre**:
  - Optativa II
  - Optativa III
  - Seminario de Investigación IV (Tesis)
  
- ✅ **Información Adicional**:
  - Total de créditos
  - Duración del programa
  - Modalidad de estudios
  - Requisitos de titulación

**Estado**: ✅ **Completada** - Estructura curricular detallada

---

### 6. Repositorio de Tesis (`/repositorio` - repositorio.astro)

**Propósito**: Mostrar las tesis de egresados organizadas por generación.

**Secciones**:
- ✅ **Hero Section**:
  - Título: "Repositorio de Tesis"
  - Descripción del repositorio
  
- 🚧 **Filtro por Generación**:
  - Submenu/selector de generaciones
  - Filtrado dinámico
  
- 🚧 **Grid de Alumnos Egresados**:
  - Cada tarjeta incluye:
    - Foto del egresado
    - Nombre completo
    - Título de la tesis
    - Botón "Descargar PDF"
  - Grid responsivo (3 columnas desktop, 1 móvil)

**Estado**: 🚧 **Pendiente** - Requiere contenido de egresados y tesis

---

### 7. Instalaciones (`/instalaciones` - instalaciones.astro)

**Propósito**: Mostrar las instalaciones y recursos disponibles para los estudiantes.

**Secciones**:
- ✅ **Hero Section**:
  - Título destacado
  - Descripción de las instalaciones
  
- 🚧 **Galería de Fotos**:
  - Grid asimétrico (masonry o bento style)
  - Fotos de:
    - Aulas
    - Biblioteca
    - Áreas comunes
    - Laboratorios/salas de cómputo
    - Espacios de estudio
  
- ✅ **Descripción de Infraestructura**:
  - Información sobre los edificios
  - Ubicación de la facultad
  
- ✅ **Amenidades y Servicios**:
  - Lista de recursos disponibles
  - Servicios para estudiantes de posgrado

**Estado**: ⚠️ **Parcialmente completa** - Falta galería de fotos real

---

### 8. Convocatoria (`/convocatoria` - convocatoria.astro)

**Propósito**: Presentar la convocatoria vigente y el proceso de admisión.

**Secciones**:
- ✅ **Hero Section**:
  - Título: "Convocatoria 2026"
  - Descripción del proceso
  
- 🚧 **Cartel Oficial**:
  - Imagen del cartel de convocatoria
  - Versión responsive
  
- 🚧 **Timeline de Fechas Clave**:
  - Sidebar vertical con hitos importantes:
    - Publicación de convocatoria
    - Periodo de registro
    - Fechas de examen
    - Publicación de resultados
    - Inicio de clases
  
- ✅ **CTAs Principales**:
  - "Descargar Convocatoria en PDF"
  - "Iniciar Pre-Registro"
  
- ✅ **Información de Contacto**:
  - Email: m.direcciondeorganizaciones@uagro.mx
  - Teléfono: 744 134 0900, ext. 4477
  - Dirección física

**Estado**: ⚠️ **Parcialmente completa** - Requiere cartel y fechas de convocatoria 2026

---

### 9. Conócenos (`/conocenos` - conocenos.astro)

**Propósito**: Presentar la historia, misión, visión y datos de contacto del programa.

**Secciones**:
- ✅ **Hero Section**:
  - Título: "Conócenos"
  - Introducción al programa
  
- ✅ **Historia del Programa**:
  - Trayectoria de 25+ años
  - Hitos importantes
  - Evolución del programa
  
- ✅ **Misión**:
  - Declaración de la misión institucional
  
- ✅ **Visión**:
  - Proyección a futuro del programa
  
- ✅ **Información de Contacto**:
  - Email
  - Teléfono y extensión
  - Dirección física
  - Horarios de atención
  
- 🚧 **Mapa de Ubicación**:
  - Google Maps embed
  - Indicaciones de cómo llegar

**Estado**: ⚠️ **Parcialmente completa** - Falta integrar mapa de Google Maps

---

## 🧩 Componentes

### Navbar.svelte
**Funcionalidad**:
- Navegación principal del sitio
- Sticky/fijo en scroll
- Efecto glassmorphism (backdrop-blur)
- Menú móvil responsive
- Logo MDO con enlace al inicio

**Props**: Ninguna

**Enlaces de Navegación**:
1. Inicio
2. Objetivos
3. Núcleo Académico
4. LIES
5. Repositorio
6. Instalaciones
7. Plan de Estudios
8. Conócenos

**Nota**: ✅ "Convocatoria" fue removida del navbar (accesible desde CTAs en homepage)

---

### Footer.svelte
**Funcionalidad**:
- Pie de página con información institucional
- Enlaces rápidos a secciones
- Logos de acreditación (SEP, CONAHCYT)
- Información de contacto
- Redes sociales (si aplica)

**Props**: Ninguna

---

### HeroSection.svelte
**Funcionalidad**:
- Sección hero de la página de inicio
- Mesh gradient de fondo
- Badge de acreditación
- Título y subtítulo principales
- Dos CTAs destacados

**Props**: Ninguna (contenido hardcoded)

---

### FeatureCard.svelte
**Funcionalidad**:
- Tarjeta de característica/beneficio
- Icono SVG personalizable
- Título y descripción

**Props**:
- `icon`: string (SVG inline)
- `title`: string
- `description`: string

---

### ProfesorCard.svelte
**Funcionalidad**:
- Tarjeta de presentación de profesor
- Foto con fondo de color
- Nombre y especialidad
- Efecto hover con elevación

**Props**:
- `nombre`: string
- `titulo`: string (ej. "Doctor en Administración")
- `foto`: string (URL de imagen) - opcional
- `colorFondo`: 'azul' | 'rojo' | 'gris'

---

### TesisCard.svelte
**Funcionalidad**:
- Tarjeta de tesis en repositorio
- Foto del egresado
- Nombre, generación y título de tesis
- Botón de descarga de PDF

**Props**:
- `alumno`: string
- `generacion`: string
- `tituloTesis`: string
- `archivoPdf`: string (URL)
- `foto`: string (URL de imagen)

---

### TabSelector.svelte
**Funcionalidad**:
- Selector de pestañas (usado en `/objetivos`)
- Cambio entre "Perfil de Ingreso" y "Perfil de Egreso"
- Indicador visual de pestaña activa

**Props**:
- `tabs`: Array<{id: string, label: string}>
- `activeTab`: string (binding)

---

## ✅ Estado Actual del Proyecto

### Completado ✅

**Infraestructura**:
- ✅ Proyecto Astro + Svelte configurado
- ✅ Tailwind CSS con colores institucionales
- ✅ Estructura de carpetas organizada
- ✅ Componentes base creados

**Diseño**:
- ✅ Paleta de colores institucional implementada
- ✅ Tipografía personalizada (Plus Jakarta Sans + Manrope)
- ✅ Mesh gradient en hero sections
- ✅ Sistema de bordes redondeados (pill style)
- ✅ Componentes con sombras suaves y hover effects

**Páginas**:
- ✅ Estructura de las 9 páginas creadas
- ✅ Contenido real integrado en:
  - Inicio
  - Objetivos
  - Núcleo Académico (nombres y doctorados)
  - LIES
  - Plan de Estudios

**Componentes**:
- ✅ Navbar con menú responsivo
- ✅ Footer con información institucional
- ✅ HeroSection
- ✅ FeatureCard
- ✅ ProfesorCard
- ✅ TesisCard
- ✅ TabSelector

**Assets**:
- ✅ Logos institucionales integrados:
  - Logo UAGro
  - Logo Facultad
  - Logo MDO

---

## 🚧 Pendientes

### Crítico (Bloquea Lanzamiento)

1. **🔴 Inicializar Repositorio Git**
   - Crear repositorio en GitHub
   - Hacer commit inicial del código
   - Configurar .gitignore

2. **🔴 Configurar Tina CMS**
   - Instalar dependencias de Tina
   - Crear `tina/config.ts` con esquema de colecciones
   - Configurar colecciones:
     - Profesores (nombre, titulo, especialidad, foto, colorFondo)
     - Tesis (alumno, generacion, tituloTesis, archivoPdf, foto)
     - Convocatoria (año, imagenCartel, pdfBases, fechas[], linkPreregistro)
     - Páginas (contenido editable)
   - Configurar autenticación
   - Probar panel de administración en `/admin`

3. **🔴 Deploy en Vercel**
   - Conectar repositorio GitHub a Vercel
   - Configurar variables de entorno
   - Configurar dominio (si aplica)
   - Probar deploy de producción

### Importante (Mejora Contenido)

4. **🟠 Fotografías de Profesores**
   - Obtener fotos profesionales de los 16 profesores
   - Optimizar imágenes (formato WebP, tamaño apropiado)
   - Actualizar componente ProfesorCard

5. **🟠 Repositorio de Tesis**
   - Recopilar información de egresados
   - Digitalizar tesis en formato PDF
   - Subir fotos de egresados
   - Implementar filtro por generación

6. **🟠 Galería de Instalaciones**
   - Tomar fotografías de las instalaciones
   - Optimizar imágenes
   - Implementar galería masonry/bento

7. **🟠 Convocatoria 2026**
   - Diseñar cartel oficial
   - Definir fechas del proceso de admisión
   - Crear PDF de bases de convocatoria
   - Configurar sistema de pre-registro

### Opcional (Mejoras UX)

8. **🟡 Google Maps Embed**
   - Obtener API key de Google Maps
   - Integrar mapa en página `/conocenos`
   - Personalizar marcadores y estilos

9. **🟡 Optimización SEO**
   - Revisar meta tags en todas las páginas
   - Generar sitemap.xml automático
   - Configurar robots.txt
   - Implementar structured data (Schema.org)

10. **🟡 Optimización de Rendimiento**
    - Lazy loading de imágenes
    - Preload de fuentes críticas
    - Minificación de CSS/JS
    - Análisis con Lighthouse

11. **🟡 Accesibilidad**
    - Audit con herramientas automáticas
    - Navegación por teclado
    - Lectores de pantalla
    - Contraste de colores WCAG AA

12. **🟡 Analytics**
    - Integrar Google Analytics o alternativa
    - Configurar eventos de conversión
    - Dashboard de métricas

---

## 📊 Resumen de Estado por Página

| Página | Estructura | Diseño | Contenido | Estado General |
|--------|-----------|--------|-----------|----------------|
| Inicio | ✅ | ✅ | ✅ | **Completa** |
| Objetivos | ✅ | ✅ | ✅ | **Completa** |
| Núcleo Académico | ✅ | ✅ | ⚠️ | **Falta: Fotos** |
| LIES | ✅ | ✅ | ✅ | **Completa** |
| Plan de Estudios | ✅ | ✅ | ✅ | **Completa** |
| Repositorio | ✅ | ✅ | 🚧 | **Falta: Contenido** |
| Instalaciones | ✅ | ✅ | 🚧 | **Falta: Fotos** |
| Convocatoria | ✅ | ✅ | 🚧 | **Falta: Cartel y Fechas** |
| Conócenos | ✅ | ✅ | ⚠️ | **Falta: Mapa** |

**Leyenda**:
- ✅ Completo
- ⚠️ Parcialmente completo
- 🚧 Pendiente

---

## 🎯 Próximos Pasos Recomendados

### Para Lanzar MVP (Producto Mínimo Viable)

1. **Inicializar Git y crear repositorio en GitHub** (30 min)
2. **Configurar Tina CMS básico** (2-3 horas)
3. **Deploy inicial en Vercel** (30 min)
4. **Obtener y agregar fotos de profesores** (depende de disponibilidad)
5. **Revisar y corregir contenido final** (1 hora)

### Para Versión Completa

6. Completar repositorio de tesis
7. Agregar galería de instalaciones
8. Publicar convocatoria 2026
9. Integrar Google Maps
10. Optimizaciones de SEO y rendimiento

---

## 📞 Contacto y Soporte

**Email**: m.direcciondeorganizaciones@uagro.mx  
**Teléfono**: 744 134 0900, ext. 4477  
**Ubicación**: Facultad de Contaduría y Administración, Acapulco, Guerrero

---

**Última actualización**: 19 de enero de 2026  
**Versión**: 1.0
