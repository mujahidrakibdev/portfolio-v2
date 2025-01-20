document.getElementById("side-toggle").addEventListener("click", function (e) {
    e.target.parentElement.classList.toggle("side-active")


    let element1 = document.getElementById("header");
    let element2 = document.getElementById("main");

    if (element1.classList.contains("big-margin") && element2.classList.contains("big-margin")) {
        element1.classList.replace("big-margin", "small-margin");
        element2.classList.replace("big-margin", "small-margin");
    } else {
        element1.classList.add("big-margin");
        element2.classList.add("big-margin");
}



})
document.getElementById("nav-toggle").addEventListener("click", function (e) {
    document.getElementById("nav-container").classList.toggle("is-open")
    
})


