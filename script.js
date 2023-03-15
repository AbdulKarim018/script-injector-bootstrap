let scriptInjected;
const spinner = document.getElementsByClassName("spinner-border")[0]
spinner.setAttribute("hidden", true)
const spinner_show = () => {
    spinner.removeAttribute("hidden")
}
const spinner_hide = () => {
    spinner.setAttribute("hidden", true)
}
const check_icon = `<i class="fa-solid fa-check"></i>`
const scriptStatus = document.getElementById("scriptStatus")
const src = "\scriptToInject.js"
const scriptLoader = () => {
    let script = document.createElement("script")
    script.src = src
    script.onerror = scriptStatus.innerHTML = `Error fetching script from the SOURCE: "${src}"`
    document.body.appendChild(script)
}

btn = document.getElementById("btn")
btn.onclick = scriptStatus_show = () => {
    if (scriptInjected != true) {
        scriptStatus.innerHTML = "Fetching Script..."
        spinner_show()
        setTimeout(() => {
            scriptStatus.innerHTML = `Script Fetched ${check_icon}`
            spinner_hide()
        }, 2000)
        setTimeout(() => {
            scriptStatus.innerHTML = "Verifying Script..."
            spinner_show()
            setTimeout(() => {
                scriptStatus.innerHTML = `Script Verified ${check_icon}`
                spinner_hide()
            }, 1000)
        }, 3000)
        setTimeout(() => {
            scriptStatus.innerHTML = "Injecting Script..."
            spinner_show()
            setTimeout(() => {
                scriptStatus.innerHTML = `Script Injected ${check_icon}`
                spinner_hide()
                scriptLoader()
            }, 3000);
        }, 5000)
        scriptInjected = true
    } else if (scriptInjected == true) {
        spinner.setAttribute("hidden", true)
        document.getElementById("scriptStatus").innerHTML = "Script is already Injected.<br>If the script doesnot work try reloading the page or provide a valid source."
    }
}


