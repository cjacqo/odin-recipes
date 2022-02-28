const detailsClicked = document.getElementById('detailsBtn')
const ingredientsClicked = document.getElementById('ingredientsBtn')
const recipeClicked = document.getElementById('recipeBtn')

const image = document.getElementById('imageContainer')
const content = document.getElementById('content')

const detailsContainer = document.getElementById('detailsContainer')
const ingredientsContainer = document.getElementById('ingredientsContainer')
const recipeContainer = document.getElementById('recipeContainer')

// Ingredient Elements
let ingredients = document.querySelectorAll('.item.ingredient')

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
    let checkMark = '<i class="fa-solid fa-times"></i>'

    ingredient.addEventListener('click', function() {
        isChecked = !isChecked

        if (isChecked) {
            check.innerHTML = checkMark
        } else {
            check.innerHTML = null
        }
    })
})

// Button Elements
let buttons = document.querySelectorAll('.link');

// Check if active
function checkActive(btn) {
    return btn.classList.contains('active')
}

// Toggle animation class names handler
function handleAnimations(prev, clicked) {
    // get id's of both buttons (params)
    let prevId = prev.id
    let clickedId = clicked.id
    
    // remove active class name from buttons
    // --- styles background color of button
    prev.classList.remove('active')
    clicked.classList.add('active')

    // check if clickedId is equal to 'detailsBtn'
    // --- this is the default display, as well as the only one that shows the image
    switch (clickedId) {
        case 'detailsBtn':
            // animate image to open from top to bottom
            image.classList.remove('hidden')
            image.classList.add('active')

            ingredientsContainer.classList.remove('active')
            ingredientsContainer.classList.add('hidden')
            ingredientsContainer.classList.add('displayNone')

            recipeContainer.classList.remove('active')
            recipeContainer.classList.add('hidden')
            recipeContainer.classList.add('displayNone')

            // timeout to remove 'display: none' from details container
            // --- after animations end
            setTimeout(() => {
                detailsContainer.classList.remove('displayNone')
            }, 550)

            // animate opacity of content
            detailsContainer.classList.remove('hidden')
            detailsContainer.classList.add('active')

            
            return;
        default:
            // check if prev active is detailsBtn
            if (prevId === 'detailsBtn') {
                // animate opacity of content
                detailsContainer.classList.remove('active')
                detailsContainer.classList.add('hidden')

                // timeout to add 'display: none' to details container
                // --- after animations end
                setTimeout(() => {
                    detailsContainer.classList.remove('hidden')
                    detailsContainer.classList.add('displayNone')
                    
                    // animate image to close from bottom to top
                    image.classList.add('hidden')
                    image.classList.remove('active')

                    if (clickedId === 'ingredientsBtn') {
                        ingredientsContainer.classList.remove('displayNone')
                        ingredientsContainer.classList.remove('hidden')
                        ingredientsContainer.classList.add('active')
                    } else {
                        recipeContainer.classList.remove('displayNone')
                        recipeContainer.classList.remove('hidden')
                        recipeContainer.classList.add('active')
                    }
                }, 550)
            } else {
                if (prevId === 'recipeBtn') {
                    recipeContainer.classList.remove('active')
                    recipeContainer.classList.add('hidden')
                    recipeContainer.classList.add('displayNone')
                    
                    if (clickedId === 'ingredientsBtn') {
                        ingredientsContainer.classList.remove('displayNone')
                        ingredientsContainer.classList.remove('hidden')
                        ingredientsContainer.classList.add('active')
                    } else {
                        detailsContainer.classList.remove('displayNone')
                        detailsContainer.classList.remove('hidden')
                        detailsContainer.classList.add('active')
                    }
                } else {
                    ingredientsContainer.classList.remove('active')
                    ingredientsContainer.classList.add('hidden')
                    ingredientsContainer.classList.add('displayNone')
                    if (clickedId === 'recipeBtn') {
                        recipeContainer.classList.remove('displayNone')
                        recipeContainer.classList.remove('hidden')
                        recipeContainer.classList.add('active')
                    } else {
                        detailsContainer.classList.remove('displayNone')
                        detailsContainer.classList.remove('hidden')
                        detailsContainer.classList.add('active')
                    }
                }
            }
            return;
    }    
}

let btnArr = []

// Add eventlisteners to buttons
buttons.forEach(function(button) {
    let btnId = button.id
    let btn = button
    let isActive

    button.addEventListener('click', function() {
        // get current active button
        let prev = document.querySelectorAll('.link.active')
        let prevId = prev[0].id

        // get clicked button
        let clicked = btn
        let clickedId = clicked.id

        if (prevId === clickedId) {
            return
        } else {
            handleAnimations(prev[0], clicked)
        }
    })
})