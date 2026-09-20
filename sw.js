// Network-first: always loads the newest page when online, falls back to the last copy offline.
const C = 'giggles-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(C).then(c => c.put('page', copy)); return r; })
      .catch(() => caches.open(C).then(c => c.match('page')))
  );
});
