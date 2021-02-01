//-----------------------------RANDOM RECIPE PART OF THE PROJECT //THIS ALL WORKS FINE
const closeBtn = document.querySelector("#close")
const randomBtn = document.querySelector("#open-random")
const overlay = document.querySelector("#overlay")
const randomDrinkName = document.querySelector("#random-drink-name")
const randomDrinkImage = document.querySelector("#random-drink-image")
const randomDrinkIngredient = document.querySelector("#random-drink-ingr")
const randomDrinkRecipe = document.querySelector("#random-drink-recipe")

//CLOSES THE OVERLAY AND FIRES RANDOMRECIPE FUNCTION (SO THAT IT'S ALREADY LOADED ONCE RANDOMBTN GETS CLICKED)
closeBtn.addEventListener("click", function() {
    overlay.classList.add("hidden") 
    overlay.classList.remove("flex")
    randomRecipe()
})

//DISPLAYS THE OVERLAY (RANDOM RECIPE FUNCTION IS ALREADY LOADED)
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




//-----------------------------DROPDOWN SELECT LIST PART OF THE PROJECT, BUGS THAT NEED FIXING

//this code will make sure only the selected option from the menu (such as === Margatita) displays getMargarita() function (I found parts of this code on stackoverflow)
// let submitBtn = document.querySelector("#submit")
// //this is the dropdown portion of the project
// submitBtn.addEventListener("click", function() {
//     var dd = document.getElementById("select");
//     console.log(dd.options[dd.selectedIndex].innerHTML);
//         if(dd.options[dd.selectedIndex].innerHTML === "Margarita") {
//             overlay.classList.remove("hidden")
//             overlay.classList.add("flex")
//             getMargarita()    //this is supposed to open a modal with margarita and it does but the width of the modal changes for some reason
//         }
// })

const select = document.querySelector("#select")
select.addEventListener("change", function() {
    if (select.value === "margarita") {
        overlay.classList.remove("hidden")
        overlay.classList.add("flex")
    }
    else {
        console.log("not margarita")
    }
})


//I copied this function from getRandom() function, only changed values to match margarita's API
// async function getMargarita() {
//     const margaritaPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

//     if(margaritaPromise.ok) {
//         const margaritaParse = await margaritaPromise.json();
//         let margarita = margaritaParse.drinks[0]
//         console.log(margarita)
//         randomDrinkName.innerHTML = margarita.strDrink
//         randomDrinkImage.src = margarita.strDrinkThumb
//         randomDrinkRecipe.innerHTML = margarita.strInstructions
        
//         let margaritaIngr = [];
//         for(let i=1; i<=15; i++) {

//             if(margarita[`strIngredient${i}`]  === null) {
//                 break;
//             }
            
//             if(margarita[`strMeasure${i}`]  === null && margarita[`strIngredient${i}`] !== null) {
//                 margaritaIngr.push(margarita[`strIngredient${i}`])
//             }

//             if(margarita[`strMeasure${i}`]  !== null && margarita[`strIngredient${i}`] !== null) {
//                 margaritaIngr.push(margarita[`strMeasure${i}`] + " " + margarita[`strIngredient${i}`])
//             }



//             var margaritastr = "<ul>"
//             margaritaIngr.forEach(function(element) {
//                 margaritastr += "<li>" + element + "</li>"
//             })
//             margaritastr += "</ul>"
//             randomDrinkIngredient.innerHTML = margaritastr

//         }
//     }

// }
// getMargarita() //for some reason when getMargarita() API loads second, when I click "RANDOM RECIPE" button it displays this function even though it has no access to it
