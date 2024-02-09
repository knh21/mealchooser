// changing toan object of arrays to be able to easily filter through depending on users choice
let foodOptions = [
    "burgers", 
    "tacos", 
    "pizza", 
    "korean", 
    "spanish food"
]

function randomFood(selectedMeal){
    // generates a random decimal between 0 and 1
    let randomDecimal = Math.random()
    
    // now we have to multiply the random decimal by the length of the array which is 4 in this case
    let randomIndex = Math.floor(randomDecimal * foodOptions.length)
    
    // now we have to get the food option using the indexs that was chosen at random
    let foodChoice = foodOptions[randomIndex]
    
    return foodChoice
}


function displayChoice(){
    let choice = randomFood()
    document.getElementById("mealDisplay").textContent = choice
    
}
document.querySelector("#randomFood").addEventListener('click', displayChoice)

// capturing the user selections from the dropdown menu
let mealChoice = document.querySelector("#mealType")

// this function is to handle when the user choices which meal type they want
function mealTypeChoice(event){
    let selectedMeal = event.target.value

    console.log(selectedMeal)

    randomFood(selectedMeal)
}
