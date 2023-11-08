// const toggle_menu = document.querySelector('.toggle-icon');
// const nav_bar_side = document.getElementById('nav-250');

// toggle_menu.addEventListener('click',()=>{

//     nav_bar_side.style.transform = 'translateX(0)'

// });


document.addEventListener("DOMContentLoaded",()=>{

    const nav_slide = document.querySelector('.navbar-slide')

    const toggle_menu = document.querySelector(".toggle-icon")

    const overlay_body = document.querySelector(".overlay-navbar");

    toggle_menu.addEventListener('click',()=>{

        nav_slide.classList.add('navbar-slide-open')


    })

    overlay_body.addEventListener('click',()=>{

        nav_slide.classList.remove('navbar-slide-open')


    })


})