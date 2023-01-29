const project_form = document.querySelector("#projectForm")

const PROJECT_NAME = "Please enter project name"

project_form.addEventListener("submit", (event) =>{

    event.preventDefault()
    let nameValid = hasValue(project_form["project_name"], PROJECT_NAME)
    
    if (nameValid) {
        project_form.submit()
    }
})

function showMessage(input, message, type){
    const msg = input.parentNode.querySelector("small")
    msg.innerText = message

    if(!type) {
        input.classList.toggle("error");
        msg.classList.toggle("errorText", !type)
    }
    
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false)
}

function showSuccess(input){
    return showMessage(input, "", true)
}

function hasValue(input, message) {

    if (input.value.trim() === "") {
        return showError(input, message)
    }

    return showSuccess(input)
}
