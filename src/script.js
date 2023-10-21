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
            const notify = new Notification("PWA Notification", {
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
})