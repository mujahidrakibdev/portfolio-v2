const sidebar = document.getElementById("sidebar")
const toggleIcon = document.querySelector(".sidebar-icon")

document.getElementById("side-toggle").addEventListener("click", function (e) {
    sidebar.classList.toggle("side-active")
    if (toggleIcon.classList.contains("fa-caret-left")) {
        toggleIcon.classList.replace("fa-caret-left", "fa-caret-right")
    } else if (toggleIcon.classList.contains("fa-caret-right")) {
        toggleIcon.classList.replace("fa-caret-right", "fa-caret-left")
    }
    



    let element1 = document.getElementById("header");
    let element2 = document.getElementById("main");
    let element3 = document.getElementById("footer");

    if (element1.classList.contains("big-margin") && element2.classList.contains("big-margin") && element3.classList.contains("big-margin")) {
        element1.classList.replace("big-margin", "small-margin");
        element2.classList.replace("big-margin", "small-margin");
        element3.classList.replace("big-margin", "small-margin");
    } else {
        element1.classList.add("big-margin");
        element2.classList.add("big-margin");
        element3.classList.add("big-margin");  
    }
})


document.getElementById("nav-toggle").addEventListener("click", function (e) {
    document.getElementById("nav-container").classList.toggle("is-open")
    
})


import { showProjectsContainer } from "./homeProjectsCards.js";
// importing projects
import { projects } from "./projects.js";
 
showProjectsContainer(projects)