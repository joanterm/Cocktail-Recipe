const closeBtn = document.querySelector("#close")
const randomBtn = document.querySelector("#open-random")
const overlay = document.querySelector("#overlay")
const randomDrinkName = document.querySelector("#random-drink-name")
const randomDrinkImage = document.querySelector("#random-drink-image")
const randomDrinkIngredient = document.querySelector("#random-drink-ingr")
const randomDrinkRecipe = document.querySelector("#random-drink-recipe")

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden") 
    overlay.classList.remove("flex")
    randomRecipe()
})

randomBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden")
    overlay.classList.add("flex")
})

// ---------------------------------------------DROPDOWN SELECT LIST PART OF THE PROJECT 
const select = document.querySelector("#select")
//EACH VALUE IN THE DROPDOWN SELECT LIST WILL CALL THE SPECIFIC FUNCTION
select.addEventListener("change", () => {
    if (select.value === "margarita") {
        overlay.classList.remove("hidden")
        overlay.classList.add("flex")
        getMartini()
    }
    else if (select.value === "whiskey-sour") {
        overlay.classList.remove("hidden")
        overlay.classList.add("flex")
        getWhiskeySour()
    }
    else if (select.value === "cosmopolitan") {
        overlay.classList.remove("hidden")
        overlay.classList.add("flex")
        getCosmopolitan()
    }
})

// Get the recipes
randomRecipe()
getMartini();
getWhiskeySour();
getCosmopolitan();