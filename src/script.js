if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("service worker Register.", registration);
    }).catch(err => {
        console.log("service worker failed", err);
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    NotificationGlobal({Title:"PWA Notification"});
})