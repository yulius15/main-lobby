// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan submenu hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

let btn =document.getElementById('btn')

function button() {
    return swal("Opss..!", "You must login first!", "info");

}