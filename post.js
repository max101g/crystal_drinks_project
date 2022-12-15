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

//     async function myDrinksPost () {
//         const thisDrink = await fetch ('http://localhost:3000/drinks', {
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
//         .then (function (data) {
//             const submitPost = document.getElementById ('drinks-posted')
//             submitPost.innerHTML = `
//                 <div class="card mb-3">
//                         <img src="${data.strDrinkThumb}" class="card-img-top" alt="..." height ='400px' width= '700px'>
//                     <div class="card-body">
//                         <h5 class="card-title"> ${data.strDrink}</h5>
//                         <p class="card-text"> Drink Category: ${data.strAlcoholic}</p>
//                         <p class="card-text">Type of glass: ${data.strGlass}</p>
//                         <p class="card-text">Ingredients used: ${data.strIngredient1},${data.strIngredient2}, ${data.strIngredient3} and ${data.strIngredient4} </p>
//                         <p class="card-text"><small class="text-muted">Tell your friends to order a crystall drink</small></p>
//                         <br>,<br><br>
//                     </div>
//                 </div>
//                 `
//     })
//     }
//     myDrinksPost ();
// })