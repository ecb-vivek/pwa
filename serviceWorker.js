self.addEventListener("install", e => {
    e.waitUntil(self.skipWaiting());
    // e.waitUntil(
    //     caches.open("static").then(cache => {
    //         return cache.addAll(["./", "./src/style.css", "./images/first.png"])
    //     })
    // );
});

self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'images/first.png',
        tag: 'push-notification'
    })
})