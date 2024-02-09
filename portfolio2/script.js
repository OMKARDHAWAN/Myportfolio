// JavaScript code to scroll to the top when the actual content page is loaded
window.addEventListener('DOMContentLoaded', function () {
  // Scroll to the top of the page
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

  // Hide the loader once the content is loaded
  document.body.style.overflow = 'auto';
  document.querySelector('.loader').style.display = 'none';
});

var typed = new Typed('#element', {
  strings: ['Full Stack Developer','Web Developer ', 'Web Designer'],
  typeSpeed: 50,
  backspeed:50,
  loop:true
});

document.querySelector("#btn-xmark").addEventListener("click",function show(){
    document.getElementById("nav-menu").style.display="none";
})
document.querySelector("#nav-bar").addEventListener("click",function Show(){
    document.getElementById("nav-menu").style.display="flex";
    
    document.getElementById("nav-menu").style.left="-18rem";
})

// // function circleMouseFollower() {
// //   window.addEventListener("mousemove", function (dets) {
// //     this.document.querySelector(
// //       "#minicircle"
// //     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
// //   });
// // }

// // circleMouseFollower();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tl1 = new gsap.timeline()


tl1.from(".n33 h1",{
  y: "100%",
  duration: 0.7,
  ease: "Expo.easeInOut"
})


tl1.from(".n55 h1",{
  y: "100%",
  duration: 0.7,
  ease: "Expo.easeInOut"
})

tl1.from(".n77 h1",{
  y: "100%",
  duration: 0.7,
  ease: "Expo.easeInOut"
})

tl1.from(".n100 h1",{
  y: "100%",
  duration: 0.7,
  ease: "Expo.easeInOut"
})


var tl2 = new gsap.timeline()


tl2.to(".n33 h1",{
  y: "-100%",
  duration: 0.7,
  delay: 0.5,
  stagger: true,
  ease: "Expo.easeInOut"
})

tl2.to(".n55 h1",{
  y: "-100%",
  duration: 0.7,
  stagger: true,
  ease: "Expo.easeInOut"
})

tl2.to(".n77 h1",{
  y: "-100%",
  duration: 0.7,
  stagger: true,
  ease: "Expo.easeInOut"
})

tl2.to(".n100 h1",{
  y: "-100%",
  duration: 0.7,
  stagger: true,
  ease: "Expo.easeInOut"
})

tl2.to("#loader", {
  height: 0,
  duration: 1,
  ease: "Expo.easeInOut"
})


tl2.from([".logo h1","#nav-menu ul","#bar"],{
    opacity:0,
    scale:1.1,
    duration:1.5,
    ease: "Expo.easeInOut"
})
tl2.from("#imgbox",{
    opacity:0,
    y:100,
    duration:1,
    ease: "Expo.easeInOut"
})
tl2.from([".photo",".hello"],{
     opacity:0,
     duration:1,
     ease: "Expo.easeInOut"
})
tl2.from(".name",{
    opacity:0,
    duration:0.5,
    ease: "Expo.easeInOut"
})
tl2.from(".p",{
   opacity:0,
   duration:0.5,
   ease: "Expo.easeInOut"
})
tl2.from(".developer",{
    opacity:0,
    duration:0.5,
    ease: "Expo.easeInOut"
 })
 tl2.from(".button",{
    opacity:0,
    duration:0.5,
     ease: "Expo.easeInOut"
 })
 


//  tl2.from("#About",{
//      scrollTrgger:{
//       trigger:"#About",
//       scroller:"body",
//       markers:true,
//       start:"top 80%",
//       end:"bottom 80%"
//      },
//      opacity:0,
//      duration:2,
//      ease: "Expo.easeInOut"
//      })
