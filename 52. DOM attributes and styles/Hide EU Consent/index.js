const hideEUConsent = () => {
    document.querySelector("#eu-consent").style.display = "none"
}

// Sample usage - do not modify
const cookieOk = document.querySelector("#cookie-ok");
cookieOk.addEventListener("click", () => hideEUConsent());
