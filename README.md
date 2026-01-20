# Maestría en Dirección de Organizaciones - UAGro

Sitio web oficial de la Maestría en Dirección de Organizaciones (MDO) de la Universidad Autónoma de Guerrero.

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v5.x
- **UI Components**: [Svelte](https://svelte.dev/) v5.x
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v4.x
- **CMS**: Tina CMS (para gestión de contenido)
- **Hosting**: Vercel

## 📋 Estructura del Proyecto

```
mdo-uagro/
├── src/
│   ├── components/         # Componentes Svelte reutilizables
│   │   ├── Navbar.svelte
│   │   ├── Footer.svelte
│   │   ├── HeroSection.svelte
│   │   ├── ProfesorCard.svelte
│   │   ├── TesisCard.svelte
│   │   ├── FeatureCard.svelte
│   │   └── TabSelector.svelte
│   ├── layouts/            # Layouts de Astro
│   │   └── BaseLayout.astro
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro              # Página de inicio
│   │   ├── objetivos.astro          # Objetivos y perfiles
│   │   ├── nucleo-academico.astro   # Núcleo académico
│   │   ├── lies.astro               # Líneas de investigación
│   │   ├── repositorio.astro        # Repositorio de tesis
│   │   ├── instalaciones.astro      # Instalaciones
│   │   ├── convocatoria.astro       # Convocatoria
│   │   └── conocenos.astro          # Acerca del programa
│   └── styles/
│       └── global.css      # Estilos globales y Tailwind
├── public/                 # Archivos estáticos
│   ├── images/
│   └── documents/
└── tina/                   #Configuración de Tina CMS
```

## 🎨 Guía de Diseño

### Colores Institucionales

- **Azul UAGro**: `#1a365d` - Color primario, textos principales, navbar
- **Rojo UAGro**: `#c53030` - CTAs principales, botones de acción
- **Grises**: `#f7fafc`, `#edf2f7` - Fondos, tarjetas

### Tipografía

- **Display (Títulos)**: Plus Jakarta Sans
- **Body (Cuerpo)**: Manrope

### Estilo Visual

- Minimalismo orgánico con amplios espacios en blanco
- Bordes muy redondeados (estilo píldora)
- Mesh gradient sutil en secciones hero
- Sombras suaves y transiciones fluidas

## 🛠️ Instalación y Desarrollo

### Prerequisitos

- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321/`

### Comandos Disponibles

| Comando                | Acción                                           |
| :-------------------- | :----------------------------------------------- |
| `npm install`          | Instalar dependencias                            |
| `npm run dev`          | Iniciar servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construir sitio para producción en `./dist/`      |
| `npm run preview`      | Vista previa del build localmente                |

## 📝 Gestión de Contenido con Tina CMS

El sitio utiliza Tina CMS para permitir la edición de contenido sin necesidad de conocimientos técnicos.

### Colecciones Editables

- **Profesores**: Información del núcleo académico
- **Tesis**: Repositorio de trabajos de investigación
- **Convocatoria**: Información de convocatorias activas
- **Páginas**: Contenido general de las páginas

## 🚢 Deploy en Vercel

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno necesarias para Tina CMS
3. Deploy automático en cada push a la rama `main`

## 👥 Contacto

- **Email**: m.direcciondeorganizaciones@uagro.mx
- **Teléfono**: 744 134 0900, ext. 4477
- **Dirección**: Facultad de Contaduría y Administración, Acapulco, Guerrero

---

© 2026 Universidad Autónoma de Guerrero. Desarrollado con ❤️ para la MDO
