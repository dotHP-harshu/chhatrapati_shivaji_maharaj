
const headerTimeline = gsap.timeline();
const headerText = document.querySelectorAll("#right p");

let splittedText = document.querySelector('.hero-name').textContent.split("");
let combinText = '';
splittedText.forEach(function (text) {
    combinText += `<span class="splitted-text">${text}</span>`;
})
document.querySelector('.hero-name').innerHTML = combinText;


let subtiltleWords = ['A Warrior King.', 'A Visionary Leader.', 'A National Icon.'];
let subtitleTime = gsap.timeline({ repeat: -1, delay: 3 });
subtiltleWords.forEach((word) => {
    subtitleTime
        .to(headerText[2], {
            opacity: 1,
            text: word,
            duration: word.length * 0.1,
            ease: "power1.out"
        })
        .to(headerText[2], {
            delay: 1
        })
        .to(headerText[2], {
            text: "A",
            duration: word.length * 0.05,
            ease: "power1.out"
        })
});


headerTimeline
    .to(".hero-img", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    })
    .to(".hero-img", {
        filter: 'drop-shadow(0 0 20px var(--ivory)',
        duration: 0.5,
        ease: 'power2.out'
    })
    .from('.splitted-text', {
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        color: 'var(--ivory)',
    })
    .from(headerText[0], {
        opacity: 0,
        duration: 1,
        y: 50,
        ease: "power2.out",
    })



// Animation for the introduction paragraph
const introParaText = document.querySelector('.intro-para p');
gsap.from(introParaText, {
    text: '',
    scrollTrigger: {
        trigger: '.intro-para',
        top: 'top 50%',
        scrub: true,
        pin: true
    }
})


// Animation for lifeJourney 
const lifeJourneyWidth = document.getElementById('life-journey').offsetWidth;

gsap.to('#life-journey', {
    x: window.innerWidth - lifeJourneyWidth,
    duration: 100,
    scrollTrigger: {
        trigger: '#life-journey-container',
        start: "top top",
        end: "+=" + lifeJourneyWidth,
        scrub: true,
        pin: true
    }
})


// animation for achievements

gsap.from('#achievement-container>h1', {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: 'elastic',
    delay: 1,
    scrollTrigger: {
        trigger: '#achievement-container>h1',
        scrub: true,
        start: 'top 80%',
        end: 'top 50%',
    }
})

const achievementCards = document.querySelectorAll('.achievement-cards');
achievementCards.forEach((card, index) => {
    if (index % 2 === 0) {
        gsap.from(card, {
            opacity: 0,
            x:-200,
            rotate:90,
            scrollTrigger: {
                trigger: card,
                start: "top 100%",
                end:"top 50%",
                scrub:true
            }
        })
    } else {
        gsap.from(card, {
            opacity: 0,
            x: 200,
            rotate:-90,
            scrollTrigger: {
                trigger: card,
                start: "top 100%",
                end:"top 50%",
                scrub:true
            }
        })
    }
})



// photo gallery animation 
const photos = document.querySelectorAll('.photo>img');
photos.forEach((photo, index) => {
    if (index % 2 === 0) {
        gsap.from(photo, {
            opacity: 0,
            x: 200,
            y: 200,
            duration: 4,
            scrollTrigger: {
                trigger: photo,
                start: 'top 90%',
                end: 'top 50%',
                scrub: true,
            }
        })
    } else {
        gsap.from(photo, {
            opacity: 0,
            x: -200,
            y: -200,
            duration: 4,
            scrollTrigger: {
                trigger: photo,
                start: 'top 90%',
                end: 'top 50%',
                scrub: true,
            }
        })
    }
})


// cursor animation 

gsap.to('.cursor',{
    scale:2,
    duration:1,
    yoyo:true,
    repeat:-1,
})



 
gsap.to(".flag", {
    rotation: 2,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "sine.inOut"
  });
gsap.to(".loader-text", {
    text:'',
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"
  });


  // footer animation 

    gsap.from('footer', {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            end: 'top 50%',
        }
    })