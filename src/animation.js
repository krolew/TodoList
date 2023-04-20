// const { eventNames } = require("process")
import createProjectContent from "./createProject"
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
                // console.log(currentActive)
                e.target.classList.add("active")
        })
    }
});


const modalTask = document.querySelector("#hiddenTaskForm")

window.onclick = function(e) {
    
    if (e.target == modalTask){
        modalTask.style.display = "none"
    }
}

// 

function currentStaus(event) {
    const activeProject = document.querySelector(".active")

    activeProject.classList.remove("active")
    event.target.classList.add("active")

    let name = event.target.getAttribute("name")
    createProjectContent(name)
    
}

const btn = document.querySelector(".btn_add_task")

export default currentStaus

/*  
    1. check localStorage if there is already exist project
        a. if Exist getlocalstorage items and print in to website
        b. if no Exist createElement in LocalStorage and set as active
       
*/