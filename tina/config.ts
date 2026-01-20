import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "2efc8d75-6334-4437-ae61-6376d22db5d0",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dbcf59db66ae9d1f0f26215a99b0284898dc1e36",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Páginas",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
          },
          {
            type: "string",
            name: "badge",
            label: "Badge (Solo para Home)",
          },
          {
            type: "string",
            name: "heroTitle",
            label: "Título Hero (Solo para Home)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Subtítulo Hero (Solo para Home)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "primaryCTA",
            label: "Botón Principal (Solo para Home)",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Texto",
              },
              {
                type: "string",
                name: "href",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "secondaryCTA",
            label: "Botón Secundario (Solo para Home)",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Texto",
              },
              {
                type: "string",
                name: "href",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Características (Solo para Home)",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icono (emoji)",
              },
              {
                type: "string",
                name: "title",
                label: "Título",
              },
              {
                type: "string",
                name: "description",
                label: "Descripción",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Estadísticas (Solo para Home)",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Número",
              },
              {
                type: "string",
                name: "label",
                label: "Etiqueta",
              },
            ],
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
