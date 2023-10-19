if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("service worker Register.");
    }).catch(err => {
        console.log("service worker failed");
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    debugger;
    Notification.requestPermission().then(res => {
        if (res === "granted") {
            const notify = new Notification("pwa Notification", {
                body: "Hello Notification",
                icon: "images/first.png",
                tag: "first"
            });
        } else {
            console.log("permission denied");
        }
    })
})