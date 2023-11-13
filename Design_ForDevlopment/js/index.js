

//  navbar js codes

const menu_btun =  document.querySelector('.menu-bar');
const navbar = document.querySelector('.navbar-sec');
const lists = document.querySelector('.nav-lists');

const toggleNav = () => {

    menu_btun.classList.toggle('active');
    navbar.classList.toggle('toggle');
    lists.classList.toggle('animate');
    
}



menu_btun.addEventListener("click", () => toggleNav());


// -----------------------------------------------

const cursorpoint =  document.querySelector('[data-cursor]');

window.addEventListener('mousemove', function (e){

    const posX =  e.clientX ;
    const posY =  e.clientY ;

    cursorpoint.style.left = `${posX}px`;
    cursorpoint.style.top =  `${posY}px`;

    cursorpoint.animate({
        left : `${posX}px`,
        top : `${posY}px`
    }, {duration: 1000 , fill: "forwards"})
    
})


// -------------------------------------------

$('.serv-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },

        1000:{
            items:2
        },

        1123:{
            items:2
        },

        1150: {
            items: 3
        }

    }
})

// ------------------------------------------------------

    const scrollRevealEle =  document.querySelectorAll('[data-reveal]');

    const scrollReveal = function () {

        for(let i = 0;  i<scrollRevealEle.length; i++){

            const revealElemonscreen =  scrollRevealEle[i].getBoundingClientRect().top < window.innerHeight ;

            if(revealElemonscreen){
                scrollRevealEle[i].classList.add('revealed');
            }
            else{
                scrollRevealEle[i].classList.remove('revealed');
            }
            
        }
        
    }

    window.addEventListener("scroll", scrollReveal);

    // ----------------------------------------------------


    $('.ptfolio-carousel').owlCarousel({
        loop:true,
        margin:12,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
    
            1000:{
                items:2
            },
    
            1123:{
                items:3
            },
    
            1150: {
                items: 3
            }
    
        }
    })


    // ----------------------------------------------------

    const header =  document.querySelector('.header-sec');

    const stickyNavbar = () => {

        header.classList.toggle('sticky', window.scrollY > 100);
        
    }


    window.addEventListener("scroll", () => stickyNavbar());


    // --------------------------------------------------


    const preloader =  document.querySelector('.preloader')

    window.addEventListener("DOMContentLoaded", function (){

        preloader.classList.add('loaded');
        document.body.classList.add('loaded')
        
    })




