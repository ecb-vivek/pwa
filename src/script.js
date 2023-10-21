if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("service worker Register.", registration);
    }).catch(err => {
        console.log("service worker failed", err);
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(res => {
        if (res === "granted") {
            const notify = new Notification("pwa Notification", {
                body: "Hello Notification",
                icon: "images/second.png",
                tag: "first"
            });
        } else {
            console.log("permission denied");
        }
    })
})