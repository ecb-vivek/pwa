self.addEventListener("install", e => {

    e.waitUntil(self.skipWaiting());
   /* e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./images/first.jpg"])
        })
    ); */
});

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for:${e.request.url}`);
})