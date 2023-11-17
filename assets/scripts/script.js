const headerDepartmentsBtn = document.querySelector(".header_departments_btn")
const headerDepartmentsMenu = document.querySelector(".header_departments_menu")

headerDepartmentsBtn.addEventListener("click",function(){
    headerDepartmentsMenu.classList.toggle("header_departments_menu_anima")
})

const test =document.querySelector(".test")
const slideList =document.querySelector(".slide_list")
const slideboxs =document.querySelectorAll(".slide_list li")

function createCounter(num){
    return (a)=> {
        if(a) return ++num
        else return (num=0)
    }
}

test.addEventListener("click",function () {
    if (count === 6){ 
        count = 0
    }
    let width = count * 25
    slideList.style.transition = "500ms"
    slideList.style.transform = `translateX(-${width}%)`
    console.log(count);
})
function salam() {
    slideList.style.transition = "0ms"
    console.log(slideList.style.transition);
    slideList.style.transform = `translateX(0%)`
}