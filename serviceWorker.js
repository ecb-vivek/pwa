self.addEventListener("install", e => {
    e.waitUntil(self.skipWaiting());
    // e.waitUntil(
    //     caches.open("static").then(cache => {
    //         return cache.addAll(["./", "./src/style.css", "./images/first.png"])
    //     })
    // );
});

self.addEventListener('push', (event) => {
    try {
        try {
            event.waitUntil(self.registration.showNotification("Hello Notification"));
        } catch (ex) { alert("error1"); alert("ex -" + ex); }

        try {
            event.waitUntil(self.registration.showNotification(event.title, { body: event.body }));
        } catch (ex) { alert("error2"); alert("ex -" + ex); }

    } catch (ex) {
        alert("error"); alert("ex -" + ex);
    }
    //    }).catch((ex)=>{ })
});