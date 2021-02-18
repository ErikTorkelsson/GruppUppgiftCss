const sidemenuButton = document.querySelector(".sidemenu-btn")

sidemenuButton.addEventListener("click", minFunktion)

function minFunktion() {
    document.querySelector(".sidemenu").classList.toggle("sidemenu-hidden")
}