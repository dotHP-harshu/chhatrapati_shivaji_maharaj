
let mnsry;
function initMnsry() {
    if (mnsry) {
        mnsry.destroy();
    }
    mnsry = new Masonry('#photo-gallery', {
        itemSelector: '.photo',
        fitWidth: true,
    })

}
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
    })
})
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
})
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
})

const sections = document.querySelectorAll('[data-cursor]');
sections.forEach((section) => {
    section.addEventListener('mouseenter', (e) => {
        cursor.innerHTML = section.dataset.cursor;
    })
})

initMnsry();

window.addEventListener('resize', initMnsry)


const loader = document.querySelector('#loader');
window.onload = () => {
    loader.style.display = 'none';
    setTimeout(() => {
        document.querySelector('.pc-message').style.display = 'none';
    }, 2000);
    let animationScript = document.createElement('script');
    animationScript.src = 'assets/js/animation.js';
    document.body.append(animationScript);
    setTimeout(() => {
        document.body.classList.remove('stop-scroll')
    }, 7500);
}


// Tailwind CSS configuration
