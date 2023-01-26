const modal = document.querySelector("#hiddenForm")

window.onclick = function(e) {
    console.log(e)
    if (e.target == modal){
        
        modal.style.display = "none"
        
    }
}
