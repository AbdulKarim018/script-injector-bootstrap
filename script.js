// let scriptInjected;
// const src = "\scriptToInject.js"
// const scriptLoader = () => {
//     let script = document.createElement("script")
//     script.src = src
//     script.onerror = document.getElementById("scriptStatus").innerHTML = `Error fetching script from the SOURCE: "${src}"`
//     document.body.appendChild(script)
// }


// btn = document.getElementById("btn")
// btn.onclick = scriptStatus_show = () => {
//     if (scriptInjected != true) {
//         document.getElementById("scriptStatus").innerHTML = "Fetching Script..."
//         setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Verifying Script..." }, 2000)
//         setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Loading Script..." }, 3000)
//         setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Injecting Script..." }, 5000)
//         setTimeout(scriptLoader, 7000)
//         scriptInjected = true
//     } else if (scriptInjected == true) {
//         document.getElementById("scriptStatus").innerHTML = "Script is already Injected.<br>If the script doesnot work try reloading the page or provide a valid source."
//     }
// }

//     NEW CODE 

let scriptInjected;
const src = "\scriptToInject.js"
const scriptLoader = () => {
    let script = document.createElement("script")
    script.src = src
    script.onerror = document.getElementById("scriptStatus").innerHTML = `Error fetching script from the SOURCE: "${src}"`
    document.body.appendChild(script)
}

btn = document.getElementById("btn")
btn.onclick = scriptStatus_show = () => {
    if (scriptInjected != true) {
        document.getElementById("scriptStatus").innerHTML = "Fetching Script..."
        setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Verifying Script..." }, 2000)
        setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Loading Script..." }, 3000)
        setTimeout(function () { document.getElementById("scriptStatus").innerHTML = "Injecting Script..." }, 5000)
        setTimeout(scriptLoader, 7000)
        scriptInjected = true
    } else if (scriptInjected == true) {
        document.getElementById("scriptStatus").innerHTML = "Script is already Injected.<br>If the script doesnot work try reloading the page or provide a valid source."
    }
}


