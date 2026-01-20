import { d as defineMiddleware, s as sequence } from './chunks/index_CsPq6-RF.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BhwD6r-h.mjs';
import 'piccolore';
import './chunks/astro/server_ylGHJKb9.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname.includes(".") || // Archivos con extensión (imágenes, css, js)
  pathname.startsWith("/_astro/") || // Assets de Astro
  pathname.startsWith("/api/") || // Opcional: si tienes API routes que no necesitan middleware
  pathname === "/favicon.svg") {
    return next();
  }
  const response = await next();
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
