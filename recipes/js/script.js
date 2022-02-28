const detailsClicked = document.getElementById('detailsBtn')
const ingredientsClicked = document.getElementById('ingredientsBtn')
const recipeClicked = document.getElementById('recipeBtn')

const image = document.getElementById('imageContainer')
const content = document.getElementById('content')

const detailsContainer = document.getElementById('detailsContainer')
const ingredientsContainer = document.getElementById('ingredientsContainer')
const recipeContainer = document.getElementById('recipeContainer')

// Ingredient Elements
let ingredients = document.querySelectorAll(".item.ingredient")

// Add eventlisteners to ingredient buttons
ingredients.forEach(function(ingredient) {
    // Create child elements of ingredient button
    let check = ingredient.querySelector('.check')
    let item = ingredient.querySelector('.text')
    let text = item.innerHTML

    // Create boolean for checked
    let isChecked
    let innerCheck = check.children

    if (innerCheck.length > 0) {
        isChecked = true
    } else {
        isChecked = false
    }

    // Create value for icon
    let checkMark = '<i class="fa-solid fa-check"></i>'

    ingredient.addEventListener('click', function() {
        isChecked = !isChecked

        if (isChecked) {
            check.innerHTML = checkMark
        } else {
            check.innerHTML = null
        }
    })
})

// Details onClick
detailsClicked.onclick = function() {
    if (this.classList.contains('active')) {
        return
    } else {
        // Display Content Container
        detailsContainer.classList.remove('hidden')
        detailsContainer.classList.add('active')

        // Toggle Button Styles
        detailsClicked.classList.add('active')
        ingredientsClicked.classList.remove('active')
        recipeClicked.classList.remove('active')

        // Remove class names of 'hidden' & 'full' & 'active' on elements
        image.classList.remove('hidden')
        content.classList.remove('full')

        ingredientsContainer.classList.remove('active')
        recipeContainer.classList.remove('active')

        ingredientsContainer.classList.add('hidden')
        recipeContainer.classList.add('hidden')
    }
}

// Ingredients onClick
ingredientsClicked.onclick = function() {
    if (this.classList.contains('active')) {
        return
    } else {
        // Display Content Container
        ingredientsContainer.classList.remove('hidden')
        ingredientsContainer.classList.add('active')

        // Toggle Button Styles
        ingredientsClicked.classList.add('active')
        detailsClicked.classList.remove('active')
        recipeClicked.classList.remove('active')

        detailsContainer.classList.remove('active')
        recipeContainer.classList.remove('active')

        detailsContainer.classList.add('hidden')
        recipeContainer.classList.add('hidden')

        image.classList.add('hidden')
        content.classList.add('full')
    }
}

// Recipe onClick
recipeClicked.onclick = function() {
    if (this.classList.contains('active')) {
        return
    } else {
        // Display Content Container
        recipeContainer.classList.remove('hidden')
        recipeContainer.classList.add('active')

        // Toggle Button Styles
        recipeClicked.classList.add('active')
        detailsClicked.classList.remove('active')
        ingredientsClicked.classList.remove('active')

        detailsContainer.classList.remove('active')
        ingredientsContainer.classList.remove('active')

        detailsContainer.classList.add('hidden')
        ingredientsContainer.classList.add('hidden')

        image.classList.add('hidden')
        content.classList.add('full')
    }
}