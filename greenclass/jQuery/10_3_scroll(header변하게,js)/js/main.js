//* javaScript
const header = document.querySelector('header')
const sticker = document.querySelector('.sticker')
const rect = header.getBoundingClientRect()

const headerTop = rect.bottom;
//const headerTop = header.offsetTop + header.offsetHeight

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    if(headerTop < scroll) {
        sticker.style = `transform:translateY(0)`;
    } else {
        sticker.style = `transform:translateY(-50px)`;
    }
});


$(window).scroll(function(){
    let scroll = $(window).scrollTop()  

    if(scroll >headerTop){
        $('.sticker').slideDown(500)
    } else {
        $('.sticker').slideUp(200)
    }    
});
/*

*/


