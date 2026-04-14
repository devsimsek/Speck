const CACHE_NAME = 'speck-cache-v1';

const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/exifr/dist/full.umd.js'
];

const GITHUB_RESOURCES = [
  'https://raw.githubusercontent.com/devsimsek/Speck/main/VERSION',
  'https://raw.githubusercontent.com/devsimsek/Speck/main/docs/CHANGELOG.md'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request because it's a stream and can only be consumed once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a stream and can only be consumed once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch(() => {
          // If offline and not in cache, we could return a fallback here
          console.log('Service Worker: Fetch failed, offline mode.');
        });
      })
  );
});