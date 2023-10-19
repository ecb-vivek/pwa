// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("serviceWorker.js").then(registration => {
//         console.log("service worker Register.");
//     }).catch(err => {
//         console.log("service worker failed");
//     });
// }

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     Notification.requestPermission().then(res => {
//         if (res === "granted") {
//             const notify = new Notification("pwa Notification", {
//                 body: "Hello Notification",
//                 icon: "images/first.png",
//                 tag: "first"
//             });
//         } else {
//             console.log("permission denied");
//         }
//     })
// })


const check = () => {
    if (!("serviceWorker" in navigator)) {
        throw new Error("No service worker Support!");
    }
    if (!("PushManager" in window)) {
        throw new Error("No Push API support!");
    }
}

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register("serviceWorker.js");
    return swRegistration;
}

const requestNotification = async () => {
    const permission = await window.Notification.requestPermission();
    if(permission === "granted"){
        throw new Error("Permission not granted");
    }
};

const main = async () =>{
    check();
    const permission = await requestNotification();
    const swRegistration = await registerServiceWorker();
}