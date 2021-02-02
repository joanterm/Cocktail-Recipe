const closeBtn = document.querySelector("#close")
const randomBtn = document.querySelector("#open-random")
const overlay = document.querySelector("#overlay")
const randomDrinkName = document.querySelector("#random-drink-name")
const randomDrinkImage = document.querySelector("#random-drink-image")
const randomDrinkIngredient = document.querySelector("#random-drink-ingr")
const randomDrinkRecipe = document.querySelector("#random-drink-recipe")

//CLOSES THE OVERLAY AND FIRES RANDOMRECIPE FUNCTION (SO THAT IT'S ALREADY LOADED ONCE RANDOMBTN GETS CLICKED)
closeBtn.addEventListener("click", ( ) => {
    overlay.classList.add("hidden") 
    overlay.classList.remove("flex")
    randomRecipe()
})

//DISPLAYS THE OVERLAY (RANDOM RECIPE FUNCTION IS ALREADY LOADED)
randomBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden")
    overlay.classList.add("flex")
})


//---------------------------------------------RANDOM DRINK PART OF THE PROJECT
async function randomRecipe() {
    const recipePromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    
    if (recipePromise.ok) {
        const getRandom = await recipePromise.json();
        console.log(getRandom.drinks[0]) //ACCESSES VALUE OF .DRINKS[0] OF THIS API
        const randomDrink = getRandom.drinks[0] //ASSIGNS A FETCHED DRINK TO A VARIABLE
        randomDrinkName.innerHTML = randomDrink.strDrink //DRINK NAME WILL BE PLACED IN APPROPRIATE HTML LOC
        randomDrinkImage.src = randomDrink.strDrinkThumb //DRINK IMAGE WILL BE PLACED IN APPROPRIATE HTML LOC
        randomDrinkRecipe.innerHTML = randomDrink.strInstructions //DRINK INSTRUCTIONS WILL BE PLACED IN APPROPRIATE LOC


        //CREATES A RANDOMARRAY TO STORE THE FETCHED INGERDIENTS AND THEIR MEASUREMENTS
        let randomArray = [];
        //THERE ARE 15 POSSIBLE INGREGIENTS SO IT WILL LOOP THROUGH THEM ALL
        for(let i=1; i<=15; i++) {

            //IF THERE ARE "NULL" VALUES IN IGREDIENTS, IT WILL STOP THE LOOP
            if(randomDrink[`strIngredient${i}`]  === null) {
                break;
            }
            //IF THERE ARE NO MEASUREMENT AND THERE ARE INGREDIENTS, IT PUSHES JUST THE INGREDIENTS INTO THE ARRAY
            if(randomDrink[`strMeasure${i}`]  === null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strIngredient${i}`])
            }
            //IF THERE ARE INGREDIENTS AND THERE ARE MEASUREMENTS, IT PUSHES THEM BOTH IN THE ARRAY
            if(getRandom.drinks[0][`strMeasure${i}`]  !== null && getRandom.drinks[0][`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strMeasure${i}`] + " " + randomDrink[`strIngredient${i}`])
            }
            console.log(randomArray)
     
            //THIS CODE WILL ALLOW THE MEASUREMENT AND INGREDIENTS TO BE DISPLAYED VERTICALLY (AS A LIST)
            var str = "<div>"
            randomArray.forEach(function(element) { //put this in a variable 
                str += "<div>" + element 
            })
            str += "</div>"
            randomDrinkIngredient.innerHTML = str
        }
    }
}
randomRecipe(); //EXECUTES THE FUNCTION




//---------------------------------------------DROPDOWN SELECT LIST PART OF THE PROJECT 
const select = document.querySelector("#select")
//EACH VALUE IN THE DROPDOWN SELECT LIST WILL CALL THE SPECIFIC FUNCTION
select.addEventListener("change", function() {
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



//---------------------------------------------FETCH MARTINI
async function getMartini() {
    const martiniPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini");
    
    if (martiniPromise.ok) {
        const getMartini = await martiniPromise.json();
        console.log(getMartini.drinks[0]) 
        const martiniDrink = getMartini.drinks[0]
        randomDrinkName.innerHTML = martiniDrink.strDrink
        randomDrinkImage.src = martiniDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = martiniDrink.strInstructions

        let martiniArray = [];
        for(let i=1; i<=15; i++) {
            if(martiniDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(martiniDrink[`strMeasure${i}`]  === null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(martiniDrink[`strMeasure${i}`]  !== null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(martiniDrink[`strMeasure${i}`] + " " + martiniDrink[`strIngredient${i}`])
            }

            console.log(martiniArray)
        }

        var str = "<div>"
        martiniArray.forEach(function(element) {
            str += "<div>" + element 
        })
        // str += "</div>"
        randomDrinkIngredient.innerHTML = str
    }
}
getMartini();



//---------------------------------------------FETCH WHISKEY SOUR
async function getWhiskeySour() {
    const whiskeySourPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey_sour");
    
    if (whiskeySourPromise.ok) {
        const getWhiskeySour = await whiskeySourPromise.json();
        console.log(getWhiskeySour.drinks[0]) //will pull new drink 0 each time. "drinks" -> check API link
        const whiskeySourDrink = getWhiskeySour.drinks[0]
        randomDrinkName.innerHTML = whiskeySourDrink.strDrink
        randomDrinkImage.src = whiskeySourDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = whiskeySourDrink.strInstructions

        let whiskeSourArray = [];
        for(let i=1; i<=15; i++) {

            if(whiskeySourDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(whiskeySourDrink[`strMeasure${i}`]  === null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeSourArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(whiskeySourDrink[`strMeasure${i}`]  !== null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeSourArray.push(whiskeySourDrink[`strMeasure${i}`] + " " + whiskeySourDrink[`strIngredient${i}`])
            }

            console.log(whiskeSourArray)

            var str = "<div>"
            whiskeSourArray.forEach(function(element) {
                str += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = str
        }
    }
}
getWhiskeySour();


//---------------------------------------------FETCH COSMOPOLITAN
async function getCosmopolitan() {
    const cosmopolitanPromise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan");
    
    if (cosmopolitanPromise.ok) {
        const getCosmopolitan = await cosmopolitanPromise.json();
        console.log(getCosmopolitan.drinks[0]) //will pull new drink 0 each time. "drinks" -> check API link
        const cosmopolitanDrink = getCosmopolitan.drinks[0]
        randomDrinkName.innerHTML = cosmopolitanDrink.strDrink
        randomDrinkImage.src = cosmopolitanDrink.strDrinkThumb
        randomDrinkRecipe.innerHTML = cosmopolitanDrink.strInstructions

        let cosmopolitanArray = [];
        for(let i=1; i<=15; i++) {
            if(cosmopolitanDrink[`strIngredient${i}`]  === null) {
                break;
            }
            
            if(cosmopolitanDrink[`strMeasure${i}`]  === null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(getMargarita.drinks[0][`strIngredient${i}`])
            }

            if(cosmopolitanDrink[`strMeasure${i}`]  !== null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(cosmopolitanDrink[`strMeasure${i}`] + " " + cosmopolitanDrink[`strIngredient${i}`])
            }

            console.log(cosmopolitanArray)
        }

        var str = "<div>"
        cosmopolitanArray.forEach(function(element) {
            str += "<div>" + element 
        })

        randomDrinkIngredient.innerHTML = str
    }
}
getCosmopolitan();