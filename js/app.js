const responsive ={
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}



document.querySelector(".toggle-collapse")
.addEventListener("click",()=>{
    document.querySelector('.nav').classList.
    toggle('collapse')
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation,owl-nav-pre'),$('.owl-navigation,owl-nav-next')],
        responsive:responsive
    });
    // click to$\\
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
});