const arrow = document.querySelector("#arrow")
const navproject = document.querySelector(".nav-project")




arrow.addEventListener("click", function(event) {
    // let arrow = document.querySelector(".arrow")
    event.target.classList.toggle("down");

    if (arrow.ariaExpanded){
        navproject.className = "nav-project"
        arrow.ariaExpanded = false
    } else{
        navproject.className = "dropdown"
        arrow.ariaExpanded = true
    }
})

export default arrow

// HOW TO GET ARIA EXPANDED FROM HTML ? and the display none XD