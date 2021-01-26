const closeBtn = document.querySelector("#close")
const randomBtn = document.querySelector("#open-random")
const overlay = document.querySelector("#overlay")
const randomDrinkName = document.querySelector("#random-drink-name")
const randomDrinkImage = document.querySelector("#random-drink-image")
const randomDrinkIngredient = document.querySelector("#random-drink-ingr")
const randomDrinkRecipe = document.querySelector("#random-drink-recipe")


closeBtn.addEventListener("click", function() {
    overlay.classList.add("hidden")
    overlay.classList.remove("flex")
    randomRecipe()
})

randomBtn.addEventListener("click", function() {
    overlay.classList.remove("hidden")
    overlay.classList.add("flex")
})


async function randomRecipe() {
    const recipePromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    
    if (recipePromise.ok) {
        const getRandom = await recipePromise.json();
        console.log(getRandom.drinks[0]) //will pull new drink 0 each time. "drinks" -> check API link
        randomDrinkName.innerHTML = getRandom.drinks[0].strDrink
        randomDrinkImage.src = getRandom.drinks[0].strDrinkThumb
        randomDrinkRecipe.innerHTML = getRandom.drinks[0].strInstructions

        let ingr = [];
        for(let i=1; i<=15; i++) {

            if(getRandom.drinks[0][`strIngredient${i}`]  === null) {
                break;
            }
            
            if(getRandom.drinks[0][`strMeasure${i}`]  === null && getRandom.drinks[0][`strIngredient${i}`] !== null) {
                ingr.push(getRandom.drinks[0][`strIngredient${i}`])
            }

            if(getRandom.drinks[0][`strMeasure${i}`]  !== null && getRandom.drinks[0][`strIngredient${i}`] !== null) {
                ingr.push(getRandom.drinks[0][`strMeasure${i}`] + " " + getRandom.drinks[0][`strIngredient${i}`])
            }

            //ingr.push(getRandom.drinks[0][`strMeasure${i}`] + getRandom.drinks[0][`strIngredient${i}`])
            console.log(ingr)
            //randomDrinkIngredient.innerHTML = ingr

            var str = "<ul>"
            ingr.forEach(function(element) {
                str += "<li>" + element + "</li>"
            })
            str += "</ul>"
            randomDrinkIngredient.innerHTML = str

        }
    }
}
randomRecipe();






//DROPDOWN MENU
const select = document.querySelector("#select")
let arrays = ["Cosmopolitan", "Manhattan", "Margarita"]

for(let i=0; i<arrays.length; i++) {
    let option = document.createElement("option")
    let txt=document.createTextNode(arrays[i])
    option.appendChild(txt)
    //option.setAttribute("value", arrays[i])
    select.insertBefore(option, select.lastChild)
}