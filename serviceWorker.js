self.addEventListener("install", e => {
    // e.waitUntil(self.skipWaiting());
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./src/script.js", "./images/first.png"])
        })
    );
});

self.addEventListener("push", function(event){
    if(event.data){
        console.log("yes");
    }else{
        console.log("not");
    }
})
