console.log(window.navigator.connection);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.deviceMemory);
console.log(window.navigator.keyboard);
console.log(window.navigator.languages);
console.log(window.navigator.maxTouchPoints);
console.log(window.navigator.mediaSession);
console.log(window.navigator.onLine);
console.log(window.navigator.pdfViewerEnabled);
console.log(window.navigator.userAgent);
console.log(window.navigator.userAgentData);
console.log(window.sessionStorage)
console.log(window.navigator.cpuClass || "No CPU Info available");
console.log(window.navigator.hardwareConcurrency || "No Hardware Data");

function dntStatus(status) {
    console.log(status ? "Do not Track is on" : "Do not track is off");
}
dntStatus(window.navigator.doNotTrack);


// console.log(window.navigator.clipboard);
// console.log(window.navigator.credentials);
// console.log(window.navigator.geolocation);


console.log(window)
// console.log(window.clientInformation)

for (let key in window) {

    // console.log(`STEP ONE: ${key}: ${window[key]}`)

    if (window.hasOwnProperty(key)) {
        console.log(`TEST: ---> ${key}: ${window[key]}`)
    }
}


Object.values(window).forEach(val => val = null ? console.dir(`test 2: ${val}`) : 'nothing here ')