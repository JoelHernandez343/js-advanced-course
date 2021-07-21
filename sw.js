const VERSION = 'v1';

self.addEventListener('install', e => {
  e.waitUntil(precache());
});

self.addEventListener('fetch', e => {
  const request = e.request;

  if (request.method !== 'GET') {
    return;
  }

  e.respondWith(cachedResponse(request));

  e.waitUntil(updateCache(request));
});

const precache = async () => {
  const cache = await caches.open(VERSION);
  cache.addAll(['/', '/index.html', '/assets/index.js', '/assets/index.css']);
};

const cachedResponse = async request => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);

  return response ?? fetch(request);
};

const updateCache = async request => {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);

  return cache.put(request, response);
};
