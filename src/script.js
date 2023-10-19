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