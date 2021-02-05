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


//---------------------------------------------RANDOM DRINK PART OF THE PROJECT
function randomRecipe() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
          if (!response.ok) {
              throw Error(`Something went wrong, your error code is: ${response.status}`)
          }
        return response.json()
    }).then(data => {
        const randomDrink = data.drinks[0]
        console.log(randomDrink)
        randomDrinkName.innerHTML = randomDrink.strDrink 
        randomDrinkImage.src = randomDrink.strDrinkThumb 
        randomDrinkRecipe.innerHTML = randomDrink.strInstructions 

        //THERE ARE 15 POSSIBLE INGREDIENTS TO CHOOSE FROM MARKED STRINGREDIENT1-STRINGREDIENT15 (SOME W/ NULL VALUES)
        let randomArray = [];
        for(let i=1; i<=15; i++) {

            if(randomDrink[`strIngredient${i}`]  === null) {
                break;
            }

            if(randomDrink[`strMeasure${i}`]  === null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strIngredient${i}`])
            }

            if(randomDrink[`strMeasure${i}`]  !== null && randomDrink[`strIngredient${i}`] !== null) {
                randomArray.push(randomDrink[`strMeasure${i}`] + " " + randomDrink[`strIngredient${i}`])
            }

            console.log(randomArray)
     
            
            let ingredientList = "<div>"
            randomArray.forEach((element) => { 
                ingredientList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = ingredientList         
        }

    }).catch(error => {
        return error
    })
}
randomRecipe()



// ---------------------------------------------DROPDOWN SELECT LIST PART OF THE PROJECT 
const select = document.querySelector("#select")
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


//---------------------------------------------FETCH MARTINI
function getMartini() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini")
      .then(response => {
          if (!response.ok) {
              throw Error(`Something went wrong, your error code is: ${response.status}`)
          }
        return response.json()
    }).then(data => {
        const martiniDrink = data.drinks[0]
        console.log(martiniDrink)
        randomDrinkName.innerHTML = martiniDrink.strDrink 
        randomDrinkImage.src = martiniDrink.strDrinkThumb 
        randomDrinkRecipe.innerHTML = martiniDrink.strInstructions 

        let martiniArray = [];
        for(let i=1; i<=15; i++) {

            if(martiniDrink[`strIngredient${i}`]  === null) {
                break;
            }

            if(martiniDrink[`strMeasure${i}`]  === null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(randomDrink[`strIngredient${i}`])
            }

            if(martiniDrink[`strMeasure${i}`]  !== null && martiniDrink[`strIngredient${i}`] !== null) {
                martiniArray.push(martiniDrink[`strMeasure${i}`] + " " + martiniDrink[`strIngredient${i}`])
            }

            console.log(martiniArray)
     
            
            let martiniList = "<div>"
            martiniArray.forEach((element) => { 
                martiniList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = martiniList        
        }

    }).catch(error => {
        return error
    })
}
getMartini()



//---------------------------------------------FETCH WHISKEY SOUR
function getWhiskeySour() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey_sour")
      .then(response => {
          if (!response.ok) {
              throw Error(`Something went wrong, your error code is: ${response.status}`)
          }
        return response.json()
    }).then(data => {
        const whiskeySourDrink = data.drinks[0]
        console.log(whiskeySourDrink)
        randomDrinkName.innerHTML = whiskeySourDrink.strDrink 
        randomDrinkImage.src = whiskeySourDrink.strDrinkThumb 
        randomDrinkRecipe.innerHTML = whiskeySourDrink.strInstructions 

        let whiskeySourArray = [];
        for(let i=1; i<=15; i++) {

            if(whiskeySourDrink[`strIngredient${i}`]  === null) {
                break;
            }

            if(whiskeySourDrink[`strMeasure${i}`]  === null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeySourArray.push(whiskeySourDrink[`strIngredient${i}`])
            }

            if(whiskeySourDrink[`strMeasure${i}`]  !== null && whiskeySourDrink[`strIngredient${i}`] !== null) {
                whiskeySourArray.push(whiskeySourDrink[`strMeasure${i}`] + " " + whiskeySourDrink[`strIngredient${i}`])
            }

            console.log(whiskeySourArray)
     
            
            let whiskeySourList = "<div>"
            whiskeySourArray.forEach((element) => { 
                whiskeySourList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = whiskeySourList        
        }

    }).catch(error => {
        return error
    })
}
getWhiskeySour()


//---------------------------------------------FETCH COSMOPOLITAN
function getCosmopolitan() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan")
      .then(response => {
          if (!response.ok) {
              throw Error(`Something went wrong, your error code is: ${response.status}`)
          }
        return response.json()
    }).then(data => {
        const cosmopolitanDrink = data.drinks[0]
        console.log(cosmopolitanDrink)
        randomDrinkName.innerHTML = cosmopolitanDrink.strDrink 
        randomDrinkImage.src = cosmopolitanDrink.strDrinkThumb 
        randomDrinkRecipe.innerHTML = cosmopolitanDrink.strInstructions 

        let cosmopolitanArray = [];
        for(let i=1; i<=15; i++) {

            if(cosmopolitanDrink[`strIngredient${i}`]  === null) {
                break;
            }

            if(cosmopolitanDrink[`strMeasure${i}`]  === null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(cosmopolitanDrink[`strIngredient${i}`])
            }

            if(cosmopolitanDrink[`strMeasure${i}`]  !== null && cosmopolitanDrink[`strIngredient${i}`] !== null) {
                cosmopolitanArray.push(cosmopolitanDrink[`strMeasure${i}`] + " " + cosmopolitanDrink[`strIngredient${i}`])
            }

            console.log(cosmopolitanArray)
     
            
            let cosmopolitanList = "<div>"
            cosmopolitanArray.forEach((element) => { 
                cosmopolitanList += "<div>" + element 
            })
            randomDrinkIngredient.innerHTML = cosmopolitanList        
        }

    }).catch(error => {
        return error
    })
}
getCosmopolitan()