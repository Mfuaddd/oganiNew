const headerDepartmentsBtn = document.querySelector(".header_departments_btn")
const headerDepartmentsMenu = document.querySelector(".header_departments_menu")

headerDepartmentsBtn.addEventListener("click",function(){
    console.log("aaa");
    headerDepartmentsMenu.classList.toggle("header_departments_menu_anima")
    // headerDepartmentsMenu.classList.toggle("h-col-12")
})