const closeBtn = document.getElementById("close")
const randomBtn = document.getElementById("open-random")
const overlay = document.getElementById("overlay")


closeBtn.addEventListener("click", function() {
    overlay.classList.add("hidden")
    overlay.classList.remove("flex")
})

randomBtn.addEventListener("click", function() {
    overlay.classList.remove("hidden")
    overlay.classList.add("flex")
})