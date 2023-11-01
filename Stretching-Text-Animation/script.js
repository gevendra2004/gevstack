const stretchBeginLetters = [...document.querySelectorAll('#stretchBegin path')];
const stretchEndLetters = [...document.querySelectorAll('#stretchEnd path')];
const messageBeginLetters = [...document.querySelectorAll('#messageBegin path')];
const messageEndLetters = [...document.querySelectorAll('#messageEnd path')];

gsap.set('.container', {
  autoAlpha: 1
});

let tl = gsap.timeline({defaults: {
    ease: 'back.inOut(2)',
    duration: 1,
    repeat: -1,
    yoyo: true,
}});

stretchBeginLetters.forEach((letter, i) => {
    tl.to(letter, {
        morphSVG: stretchEndLetters[i],
    })
    .to(messageBeginLetters[i], {
        morphSVG: messageEndLetters[i]
    }, '<');
});