document.addEventListener ('DOMContentLoaded', ()=>{
    fetchDrinks ();
    // postDrinks ();
});

//fetch information from the JSON server 

function fetchDrinks () {
    fetch ('')
    .then ((resp)=> resp.json ())
    .then (myCocktails)
};

// create a function that allows 

function create (movies) {
const createDrinksLst = document.querySelector ('drinks-display')
const cocktailsLst = document.createElement ('span')
cocktailsLst.innerHTML = movies.strDrink
createDrinksLst.appendChild (cocktailsLst)
cocktailsLst.style.cursor = 'pointer'
};

// Create event listeners

function myCrystalFunctionality (movies) {
    cocktailsLst.addEventListener ('click', ()=>{
        const myDrinksDisplay = document.querySelector ('#my-display')
        const myDrinkDisp= document.createElement ('div')
        drinkDisp.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${movies.strDrinkThumb}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        `
        drinksDisplay.appendChild (drinkDisp)
        console.log ('AM F**KING AMAZING')
    })

}