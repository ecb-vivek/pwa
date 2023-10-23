if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(async registration => {
       await Notification.requestPermission();
        console.log("service worker Register.", registration);
    }).catch(err => {
        console.log("service worker failed", err);
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    var N = new Notification("Hello Notification",{
        body: "Hello Notification",
        icon: "images/second.png",
        badge:"images/second.png",
        tag: "first"
    });
})
