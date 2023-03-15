const scriptLoadedMsg = () => {
    document.getElementById("scriptStatus").innerHTML = "Script Injected Successfully! You are ready to go."
}
scriptLoadedMsg()

setInterval(scriptLoadedMsg,4000)