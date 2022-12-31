// const { response } = require("express");

document.addEventListener ('DOMContentLoaded', ()=> {
    fetchCocktails ();
})

// Create a GET function that allows one to derive data from our API

function fetchCocktails () {
    fetch ('http://localhost:3000/cocktails')
    .then ((resp)=> resp.json ())
    .then (iterateCocktails)
}

function iterateCocktails (cocktails) {
    cocktails.forEach (myCocktails)
}

// Create a function that allows one to display the information from the GET function

function myCocktails (cocktails) {
    const dispLst = document.querySelector ('#drinks-display')
    const dispDiv = document.createElement ('div')
    dispDiv.innerHTML = cocktails.drink_name
    dispLst.appendChild (dispDiv)
    dispDiv.style.cursor = 'pointer'
    dispDiv.addEventListener ('click', ()=> {
        const myDisp = document.querySelector ('#my-display')
        const myDispDiv = document.createElement ('div')
        myDispDiv.style.cursor = 'all-scroll'
        myDispDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${cocktails.drink_name}</h5>
                    <p class="card-text">Cocktails Ingredients:</p>
                    <p class="card-text">${cocktails.ingredient1}</p>
                    <p class="card-text">${cocktails.ingredient2}</p>
                    <p class="card-text">${cocktails.ingredient3}</p>
                    <p class="card-text">${cocktails.ingredient4}</p>
                </div>
                    <img 
                    src="${cocktails.drink_url}" 
                    class="card-img-bottom" 
                    alt="Crystal Drinks Cocktails"
                    height = "500px"
                    width = "800px"
                    >
            </div>
        `
        myDisp.appendChild (myDispDiv)
        const myDrinkName = document.querySelector ('#drink-name')
        myDrinkName.innerHTML = cocktails.drink_name

        dispDiv.addEventListener ('dblclick', ()=> {
            // console.log ('This is it')
            dispDiv.innerHTML = ''
            deleteFunction (cocktails.id)
        })
    })
}

// Create a function that allows one to post their favourite drink using the form in the UI

const cocktailsForm = document.querySelector ('#submit-form')
cocktailsForm.addEventListener ('submit', (e)=> {
    e.preventDefault ()

    const cocktailsName = document.querySelector ('#cocktail-name').value
    const cocktailsCategory = document.querySelector ('#cocktail-category').value
    const cocktailGlassType = document.querySelector ('#glass-type').value
    const cocktailsImageUrl = document.querySelector ('#cocktail-url').value
    const ingredientOne = document.querySelector ('#ing-one').value
    const ingredientTwo = document.querySelector ('#ing-two').value
    const ingredientThree = document.querySelector ('#ing-three').value
    const ingredientFour = document.querySelector ('#ing-four').value

    fetch ('http://localhost:3000/cocktails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            drink_name: cocktailsName,
            drink_category: cocktailsCategory,
            glass_type: cocktailGlassType,
            drink_url: cocktailsImageUrl,
            ingredient1: ingredientOne,
            ingredient2: ingredientTwo,
            ingredient3: ingredientThree,
            ingredient4: ingredientFour
        })
    })
    .then ((response)=> response.json ())
    .then ((myPostFunction)=> console.log (myPostFunction))
})

// Create a function that deletes an item from the API server on double click
function deleteFunction (id) {
    fetch (`http://localhost:3000/cocktails/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then ((res)=> res.json ())
    .then ((drinkDelete)=> console.log (drinkDelete))
}