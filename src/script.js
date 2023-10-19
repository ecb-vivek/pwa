if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("service worker Register.");
        console.log(registration);
    }).catch(err => {
        console.log("service worker failed");
        console.log(err);
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(res => {
        if (res === "granted") {
            const notify = new Notification("First Notification", {
                body: "Hello Notification",
                icon: "images/first.png",
                tag: "first"
            });
        } else {
            console.log("permission denied");
        }
    })
})