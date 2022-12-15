// // const e = require("express")
// document.addEventListener ('DOMContentLoaded', ()=>{
//     fetchDrinks ();
// });

// //fetch information from the JSON server 

// function fetchDrinks () {
//     fetch ('http://localhost:3000/drinks')
//     .then ((resp)=> resp.json ())
//     .then (iterateDrinks)
// };

// // create a function that allows one to iterate through Fetched data

// function iterateDrinks (drinks) {
//     drinks.forEach (myCocktails)
// }

// // create a function that allows one to use iterated data

// function myCocktails (drinks) {
//     const drinksListDisp = document.querySelector ('#drinks-display')
//     const displayDrinks = document.createElement ('div')
//     displayDrinks.innerHTML = drinks.strDrink
//     drinksListDisp.appendChild (displayDrinks)
//     const createCard = document.querySelector ('#my-display')
//     const cardsDiv = document.createElement ('div')
//     cardsDiv.innerHTML = `
//         <div class="card mb-3">
//                 <img src="${drinks.strDrinkThumb}" class="card-img-top" alt="..." height ='400px' width= '700px'>
//             <div class="card-body">
//                 <h5 class="card-title"> ${drinks.strDrink}</h5>
//                 <p class="card-text"> Drink Category: ${drinks.strAlcoholic}</p>
//                 <p class="card-text">Type of glass: ${drinks.strGlass}</p>
//                 <p class="card-text">Ingredients used: ${drinks.strIngredient1},${drinks.strIngredient2}, ${drinks.strIngredient3} and ${drinks.strIngredient4} </p>
//                 <p class="card-text"><small class="text-muted">Tell your friends to order a crystall drink</small></p>
//                 <br>,<br><br>
//             </div>
//         </div>
//     `
//     createCard.appendChild (cardsDiv)
//     // const myOrderBtn = document.querySelector ('.btn')
//     // myOrderBtn.addEventListener ('click', ()=> {
//     //     console.log ('${}')
//     // })
//     cardsDiv.style.cursor = 'all-scroll'
//     displayDrinks.style.cursor = 'pointer'
//     displayDrinks.addEventListener ( 'click', (e)=> {
//         const addOrders = document.querySelector ('#order-count')
//         const drinkName = document.querySelector ('#drink-name')
//         drinkName.innerHTML = drinks.strDrink
//         // attempt again
//     })
// }


// const submitForm = document.querySelector ('#submit-form')
// submitForm.addEventListener ('submit', (e)=> {
//     e.preventDefault ();

//     const formData = new FormData (submitForm)
//     const data = Object.fromEntries (formData)

//     fetch ('http://localhost:3000/drinks', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify (data)
//         })
//         .then ((response)=> response.json ())
//         // .then (myPostFunction)
// })

// // const e = require("express")

// const submitForm = document.querySelector ('#submit-form')
// submitForm.addEventListener ('submit', (e)=> {
//     e.preventDefault ();
//     const drinkName = document.getElementById ('drink-name').value
//     const drinkImage = document.getElementById ('drink-image').value
//     const drinkCategory = document.getElementById ('drink-category').value
//     const glassType = document.getElementById ('glass-type').value
//     const ingredientOne = document.getElementById ('ingredient-one').value
//     const ingredientTwo = document.getElementById ('ingredient-two').value
//     const ingredientThree = document.getElementById ('ingredient-three').value
//     const ingredientFour = document.getElementById ('ingredient-four').value

//         fetch ('http://localhost:3000/drinks', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify ({
//             strDrink: drinkName,
//             strDrinkThumb: drinkImage,
//             strAlcoholic: drinkCategory,
//             strGlass: glassType,
//             strIngredient1: ingredientOne,
//             strIngredient2: ingredientTwo,
//             strIngredient3: ingredientThree,
//             strIngredient4: ingredientFour,
//         })
//         })
//         .then ((response)=> response.json ())
//         .then (myPostFunction)
    
// })

// // function myPostFunction (data) {
// //     const submitPost = document.getElementById ('drinks-posted')
// //     submitPost.innerHTML = `
// //         <div class="card mb-3">
// //                 <img src="${data.strDrinkThumb}" class="card-img-top" alt="..." height ='400px' width= '700px'>
// //             <div class="card-body">
// //                 <h5 class="card-title"> ${data.strDrink}</h5>
// //                 <p class="card-text"> Drink Category: ${data.strAlcoholic}</p>
// //                 <p class="card-text">Type of glass: ${data.strGlass}</p>
// //                 <p class="card-text">Ingredients used: ${data.strIngredient1},${data.strIngredient2}, ${data.strIngredient3} and ${data.strIngredient4} </p>
// //                 <p class="card-text"><small class="text-muted">Tell your friends to order a crystall drink</small></p>
// //                 <br>,<br><br>
// //             </div>
// //         </div>
// //         `
// // }