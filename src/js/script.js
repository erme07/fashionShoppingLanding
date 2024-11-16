
const $navBarButton = document.getElementById("navButton");
const $menu = document.getElementById("menu");

document.addEventListener('click', (e) =>{

    if (e.target.id == "navButton") {
        $navBarButton.classList.toggle("active");
        $menu.classList.toggle("show");
    }
    if(e.target.getAttribute("data-name") == "acordeon-button"){
        e.target.parentElement.parentElement.classList.toggle("acordeon-active")
    }
})