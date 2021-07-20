import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// eslint-disable-next-line no-undef
const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
  console.log("installing service worker")
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
  console.log("activating service worker")
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
  console.log("fecthing service worker")
});
