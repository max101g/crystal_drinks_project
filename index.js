// const { response } = require("express");

document.addEventListener ('DOMContentLoaded', ()=>{
    fetchDrinks ();
    postDrinks ()
});

//fetch information from the JSON server 

function fetchDrinks () {
    fetch ('http://localhost:3000/drinks')
    .then ((resp)=> resp.json ())
    .then (iterateDrinks)
};

// create a function that allows one to iterate through Fetched data

function iterateDrinks (movies) {
    movies.forEach (myCocktails)
}

// create a function that allows one to use iterated data

function myCocktails (movies) {
    const drinksListDisp = document.querySelector ('#drinks-display')
    const displayDrinks = document.createElement ('div')
    displayDrinks.innerHTML = movies.strDrink
    drinksListDisp.appendChild (displayDrinks)
    const createCard = document.querySelector ('#my-display')
    const cardsDiv = document.createElement ('div')
    cardsDiv.innerHTML = `
        <div class="card mb-3">
                <img src="${movies.strDrinkThumb}" class="card-img-top" alt="..." height ='400px' width= '700px'>
            <div class="card-body">
                <h5 class="card-title"> ${movies.strDrink}</h5>
                <p class="card-text"> Drink Category: ${movies.strAlcoholic}</p>
                <p class="card-text">Type of glass: ${movies.strGlass}</p>
                <p class="card-text">Ingredients used: ${movies.strIngredient1},${movies.strIngredient2}, ${movies.strIngredient3} and ${movies.strIngredient4} </p>
                <p class="card-text"><small class="text-muted">Tell your friends to order a crystall drink</small></p>
                <br>,<br><br>
            </div>
        </div>
    `
    createCard.appendChild (cardsDiv)
    // const myOrderBtn = document.querySelector ('.btn')
    // myOrderBtn.addEventListener ('click', ()=> {
    //     console.log ('${}')
    // })
    cardsDiv.style.cursor = 'all-scroll'
    displayDrinks.style.cursor = 'pointer'
    displayDrinks.addEventListener ( 'click', (e)=> {
        const addOrders = document.querySelector ('#order-count')
        const drinkName = document.querySelector ('#drink-name')
        drinkName.innerHTML = movies.strDrink
        let 
        const myOrders = i
        // attempt again
    })
}

const submitForm = document.querySelector ('#submit-form')
const drinkName = submitForm.querySelector ('#drink-name').value
const drinkImage = submitForm.querySelector ('#drink-image').value
const drinkCategory = submitForm.querySelector ('#drink-category').value
const glassType = submitForm.querySelector ('#glass-type').value
const ingredientOne = submitForm.querySelector ('#ingredient-one').value
const ingredientTwo = submitForm.querySelector ('#ingredient-two').value
const ingredientThree = submitForm.querySelector ('#ingredient-three').value
const ingredientFour = submitForm.querySelector ('#ingredient-four').value


function postDrinks () {
    fetch ('http://localhost:3000/drinks', {
        method: 'POST',
        body: JSON.stringify ({
            strDrink: drinkName,
            strDrinkThumb: drinkImage,
            strCategory: drinkCategory,
            strGlass: glassType,
            strIngredient1: ingredientOne,
            strIngredient2: ingredientTwo,
            strIngredient3: ingredientThree,
            strIngredient4: ingredientFour,
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then ((response)=> response.json ())
    .then (postIteration)
}

function postIteration (movies) {
    movies.forEach (createPost)
}

function createPost (movies) {
    submitForm.addEventListener ('submit', (e)=> {
        e.preventDefault ()
        const newPost = document.querySelector ('#my-display')
        const newPostDiv = document.createElement ('div')
        newPostDiv.innerHTML = `
            <div class="card mb-3">
                    <img src="...." class="card-img-top" alt="..." height ='400px' width= '700px'>
                <div class="card-body">
                    <h5 class="card-title"> ${movies.strDrink}</h5>
                    <p class="card-text"> Drink Category: ${movies.strAlcoholic}</p>
                    <p class="card-text">Type of glass: ${movies.strGlass}</p>
                    <p class="card-text">Ingredients used: ${movies.strIngredient1},${movies.strIngredient2}, ${movies.strIngredient3} and ${movies.strIngredient4} </p>
                    <p class="card-text"><small class="text-muted">Tell your friends to order a crystall drink</small></p>
                    <br>,<br><br>
                </div>
            </div>
        `
        newPost.appendChild (newPostDiv)
    })
}