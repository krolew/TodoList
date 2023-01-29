const arrow = document.querySelector("#arrow")
const navproject = document.querySelector(".nav-project")

const inbox_btn = document.querySelector(".inbox-btn")
const today_btn = document.querySelector(".today-btn")
const week_btn = document.querySelector(".week-btn")

// const main_container = document.querySelector(".main_container")
const inbox_container = document.querySelector(".inboxContainer")
const today_container = document.querySelector(".todayContainer")
const week_container = document.querySelector(".weekContainer")


window.weekbtn_onclick = function () {
    inbox_container.classList = "hideContainer"
    today_container.classList = "hideContainer"
    week_container.classList = "showContainer"

}

window.todaybtn_onclick = function () {
    inbox_container.classList = "hideContainer"
    week_container.classList = "hideContainer"
    today_container.classList = "showContainer"
}


window.inboxbtn_onclick = function () {
    today_container.classList = "hideContainer"
    week_container.classList = "hideContainer"
    inbox_container.classList = "showContainer"
}

// show and hide active project on left bar
arrow.addEventListener("click", function(event) {
    event.target.classList.toggle("down");

    if (arrow.ariaExpanded){
        navproject.className = "nav-project"
        arrow.ariaExpanded = false
    } else{
        navproject.className = "dropdown"
        arrow.ariaExpanded = true
    }
})

// Current Active Inbox, Today, Week or projects

document.querySelectorAll(".nav").forEach((el) =>{
    for (const child of el.children)
    {
        child.addEventListener("click", (e)=>{
                const currentActive = document.querySelector(".active")
                if(currentActive)
                {
                    currentActive.classList.remove("active")
                }
                console.log(currentActive)
                e.target.classList.add("active")
        })
    }
});


const modalProject = document.querySelector("#hiddenForm")
const modalTask = document.querySelector("#hiddenTaskForm")


window.onclick = function(e) {
    console.log(e)
    if (e.target == modalProject){  
        modalProject.style.display = "none" 

    }
    
    if (e.target == modalTask){
        modalTask.style.display = "none"
    }

    clearErrorInput()
}

function clearErrorInput() {
    const errorInputs = document.querySelectorAll(".error")
    const errorTexts = document.querySelectorAll(".errorText")
    
    if (errorInputs) {
        errorInputs.forEach((el) => {
            el.classList.remove("error")
        })
    }

    if (errorTexts){
        errorTexts.forEach((el)=>{
            el.classList.remove("errorText")
        })
    }
    
    return false;
    
}