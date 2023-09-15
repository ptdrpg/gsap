import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to("#block1", {
    delay: 1,
    duration: 5,
    x: -25,
    y: -200,
});
gsap.to("#block2", {
    delay: 1,
    duration: 5,
    x: 400,
    y: -200,
});
gsap.to("#block3", {
    delay: 1,
    duration: 5,
    x: -293,
    y: 220,
});
gsap.to("#block4", {
    delay: 1,
    duration: 5,
    x: 125,
    y: 220,
})
gsap.fromTo(".navbar", {
    y: -50.
}, {
    delay: 6,
    duration: 1,
    y: 0,
});
gsap.fromTo(".representation", {
    opacity: 0,
},{
    delay: 8,
    opacity: 1,
    duration: 5,
});
gsap.fromTo(".background",{
    opacity: 0,
},{
    opacity: 1,
    duration: 5,
    delay: 3,
});
gsap.fromTo(".button",{
    opacity: 0,
},{
    opacity: 1,
    duration: 5,
    delay: 10,
});