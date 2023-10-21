self.addEventListener("install", e => {
    e.waitUntil(self.skipWaiting());
    // e.waitUntil(
    //     caches.open("static").then(cache => {
    //         return cache.addAll(["./", "./src/style.css", "./images/first.png"])
    //     })
    // );
});

var NotificationGlobal = function (data) {
    Notification.requestPermission().then(res => {
        if (res === "granted") {
            self.registration.showNotification(data.Title, {
                body: "Hello Notification",
                icon: "images/second.png",
                badge:"images/second.png",
                tag: "first"
            });
        } else {
            alert("permission denied");
            console.log("permission denied");
        }
    }).catch((ex)=>{ alert("error");alert("ex -"+ex)})
}