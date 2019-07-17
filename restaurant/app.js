
let menuListDiv = document.getElementById("menuListDiv")
let dropDown = document.getElementById("dropDown")

let menusDiv = dishes.map(dish => {

    let menuDiv = `<div class="menuItem">
                        <img src='${dish.imageURL}'></img>
                        <div class="info">
                        <h4>${dish.title}</h4>
                        <span>${dish.description}</span>
                        </div>
                        <p>${dish.price}</p>
                    </div>`
    return menuDiv
})

menuListDiv.innerHTML = menusDiv.join('')

dropDown.addEventListener('change', function() {

    let course = this.value 
    
    let filteredDishes = dishes.filter(dish => dish.course == course) 
    if(course == "All") {
        filteredDishes = dishes
    }

    let filteredsDiv = filteredDishes.map (dish => {
        
        let filteredDiv = `<div class="menuItem">
                        <img src='${dish.imageURL}'></img>
                        <div class="info">
                        <h4>${dish.title}</h4>
                        <span>${dish.description}</span>
                        </div>
                        <p>${dish.price}</p>
                    </div>` 
        return filteredDiv
    })

    menuListDiv.innerHTML = filteredsDiv.join('')
})

//let starterDishes = dishes.filter(dish => dish.course == "Starters")
//console.log(starterDishes)
//above is same as this....
//let entreeDishes = dishes.filter(function(dish) {
//    return dish.course == "Entrees"
//})

