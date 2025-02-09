
var msnry = new Masonry('#photo-gallery', {
    itemSelector: '.photo',
    fitWidth: true,
})

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.clientX,
        y:e.clientY,
        duration:0.1,
    })
})
document.addEventListener('mouseleave',()=>{
    cursor.style.opacity = 0;
})
document.addEventListener('mouseenter',()=>{
    cursor.style.opacity = 1;
})

const sections = document.querySelectorAll('[data-cursor]');
sections.forEach((section)=>{
    section.addEventListener('mouseenter', (e)=>{
        cursor.innerHTML = section.dataset.cursor;
    })
})




const loader = document.querySelector('.loader');
window.onload = ()=>{
    loader.style.display = 'none';
}