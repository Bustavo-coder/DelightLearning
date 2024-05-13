var navigate = document.getElementById("navigation")
var toggle = document.getElementById("menu-toggle")
var slide = document.getElementsByClassName("slide")
var dropInput = document.getElementById("owners")
var seeMore = document.getElementById("dp")
 
const active = () => {
    navigate.classList.toggle("active")
    console.log("e do press")
}

toggle.addEventListener("click",active)

const iNput = () =>{
    dropInput.classList.toggle("iNput")
    console.log("Plsssse")
}
seeMore.addEventListener("click", iNput)

let slideIndex = 0
const hide = () => {
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
}

const showSlides = () => {
    hide()

    slideIndex ++
    if(slideIndex > slide.length){
        slideIndex = 1
    }
    slide[slideIndex - 1].style.display="block"
    setTimeout( showSlides, 1000)
}
showSlides()