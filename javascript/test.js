
    const buttonStore = document.querySelector("#passwordBtn")
    const inputStore = document.querySelector("#passwordInput")
        
    buttonStore.addEventListener("click", function() {
        const type = inputStore.getAttribute("type") === "password" ? "text" : "password"
        inputStore.setAttribute("type", type)
    })
