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
    self.registration.showNotification("PWA Notification", {
        body: {
            body: "Hello Notification",
            icon: "images/second.png",
            badge:"images/second.png",
            tag: "first"
        },
        icon: 'images/second.png',
        tag: 'push-notification'
    })
})