self.addEventListener("install", e => {
    // e.waitUntil(self.skipWaiting());
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./src/script.js", "./images/first.png"])
        })
    );
});

// self.addEventListener("fetch", e => {
//     e.respondWith((async () => {
//         const resource = await caches.match(e.request);
//         return resource || fetch(e.request);
//     })());
// });

