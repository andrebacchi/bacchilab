// Service worker do BACCHI LAB. Ele fica na raiz do site, mas só cuida dos
// arquivos do próprio hub: pedidos para os apps (/nomo-lab/, /stat-lab/ ...)
// passam direto, e cada app continua com o seu próprio service worker.
const VERSION = 'bacchi-lab-v4';
const FILES = ['./', 'index.html', 'qrcode.js', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-64.png', 'icons/apple-touch-icon.png',
  'icons/apps/nomo-lab.png', 'icons/apps/stat-lab.png', 'icons/apps/2-2-lab.png',
  'icons/apps/bingo-picareta.png', 'icons/apps/gerador-pseudociencias.png', 'icons/apps/farmaco-lab.png',
  'icons/apps/tarot-cetico.png'];
const OWN = new Set(FILES.map(f => new URL(f, self.registration.scope).pathname));

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('bacchi-lab-') && k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !OWN.has(url.pathname)) return;
  // rede primeiro (para ver apps novos logo), cache se estiver sem internet
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
