const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const numberIdicator = document.querySelector(".numbers")
const list = document.querySelector(".list")

let active = 0;
const total = items.length
let timer; 


clearInterval(timer)
timer = setInterval( () => {
    uptade(1)
}, 8000);

function uptade(direction) {

    document.querySelector(".item.active").classList.remove("active")
    document.querySelector(".dot.active").classList.remove("active")

    if(direction > 0){

        active = active + 1

            if(active === total){
                active = 0
            }
    } 
        else if(direction <0){
            active = active - 1

            if(active < 0){
                active = total -1 
            }
    }

    items[active].classList.add("active")
    dots[active].classList.add("active")

    numberIdicator.textContent = String(active + 1).padStart(2, "0")

}


prevButton.addEventListener("click", () => {
    uptade(-1)
})

nextButton.addEventListener("click", () => {
    uptade(1)
})

