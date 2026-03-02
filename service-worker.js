const CACHE_NAME = "animal-game-v1";

const urlsToCache = [
"./",
"./index.html",
"./dog.png",
"./cat.png",
"./cow.png",
"./rabbit.png",
"./correct.mp3",
"./wrong.mp3",
"./start.mp3",
"./bgm.mp3"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});
