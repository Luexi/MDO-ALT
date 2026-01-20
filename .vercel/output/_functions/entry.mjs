import { r as renderers } from './chunks/_@astro-renderers_e8tZXpDX.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CNaQgpg6.mjs';
import { manifest } from './manifest_BHitIN0b.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/conocenos.astro.mjs');
const _page2 = () => import('./pages/convocatoria.astro.mjs');
const _page3 = () => import('./pages/instalaciones.astro.mjs');
const _page4 = () => import('./pages/lies.astro.mjs');
const _page5 = () => import('./pages/nucleo-academico.astro.mjs');
const _page6 = () => import('./pages/objetivos.astro.mjs');
const _page7 = () => import('./pages/plan-de-estudios.astro.mjs');
const _page8 = () => import('./pages/repositorio.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/conocenos.astro", _page1],
    ["src/pages/convocatoria.astro", _page2],
    ["src/pages/instalaciones.astro", _page3],
    ["src/pages/lies.astro", _page4],
    ["src/pages/nucleo-academico.astro", _page5],
    ["src/pages/objetivos.astro", _page6],
    ["src/pages/plan-de-estudios.astro", _page7],
    ["src/pages/repositorio.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "958405bb-d352-4709-8001-d0bf50570dfc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
