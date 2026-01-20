import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const { pathname } = context.url;

    // Optimización: Evitar procesamiento innecesario para assets estáticos
    // Vercel debería servir estos archivos directamente desde el CDN,
    // pero si llegamos aquí, asegura que pasamos rápido.
    if (
        pathname.includes('.') || // Archivos con extensión (imágenes, css, js)
        pathname.startsWith('/_astro/') || // Assets de Astro
        pathname.startsWith('/api/') || // Opcional: si tienes API routes que no necesitan middleware
        pathname === '/favicon.svg'
    ) {
        return next();
    }

    // Aquí iría la lógica de redirecciones, headers, auth, etc.
    // Por ahora, solo pasamos al siguiente handler.
    const response = await next();
    return response;
});
