
const $navbar = document.getElementById("navbar");
const $navBarButton = document.getElementById("navButton");
const $menu = document.getElementById("menu");

let posicionY = 0;
let menushow = false;
let navbarHeight = $navbar.clientHeight

document.addEventListener('click', (e) =>{
    if (e.target.id == "navButton") {
        $navBarButton.classList.toggle("active");
        $menu.classList.toggle("show");
        menushow = !menushow;
    }
    if(e.target.getAttribute("data-name") == "acordeon-button"){
        e.target.parentElement.parentElement.classList.toggle("acordeon-active")
    }
})

document.addEventListener('scroll', () => {
    if (posicionY > scrollY) { //subiendo
        if(getComputedStyle($navBarButton).display=="none"){
            if(scrollY==0){
                $navbar.classList.add("lg:absolute")
                $navbar.classList.remove("fixed","transition-transform","duration-300","drop-shadow")
            }else{
                $navbar.classList.add("transition-transform","duration-300","drop-shadow");
            }
            $navbar.classList.add("translate-y-0");
            $navbar.classList.remove("-translate-y-full");
        }else if(scrollY==0){
            $navbar.classList.remove("drop-shadow");
        }
    }
    else if(posicionY < scrollY){  //bajando
        if(getComputedStyle($navBarButton).display=="none"){
            if (posicionY > navbarHeight) {
                $navbar.classList.add("fixed","-translate-y-full");
                $navbar.classList.remove("lg:absolute","translate-y-0")
            }
        }else{
            $navbar.classList.add("drop-shadow");
        }
    }
    posicionY = scrollY;
})

window.addEventListener("resize", (e)=>{
    navbarHeight = $navbar.clientHeight
})