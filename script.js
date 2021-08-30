let stickyLogo = document.querySelector('.sticky-logo');
let stickyLogo2 = document.querySelector('.sticky-logo-2')
let h1StickyLogoText = document.querySelector('.h1-sticky-logo-text')
let h1StickyLogoText2 = document.querySelector('.h1-sticky-logo-text-2')
let h2Text = document.querySelector('.h2-text');
let prlxStaticBoxParent = document.querySelector('.parallax-static-box-parent');
/*let halfScreenDiv = document.querySelector('.half-screen-div');*/
let box = document.querySelectorAll('.box');
let prlxBoxDiv = document.querySelector('.parallax-box-div');
let staticBoxDiv = document.querySelector('.static-box-div');
let prlxPic1 = document.querySelector('.prlx-pic-1');
let prlxPic2 = document.querySelector('.prlx-pic-2');
let prlxPic3 = document.querySelector('.prlx-pic-3');
let prlxPic4 = document.querySelector('.prlx-pic-4')
let prlxPic5 = document.querySelector('.prlx-pic-5')
let prlxPic6 = document.querySelector('.prlx-pic-6')
let staticBox1 = document.querySelector('.static-box-1');
let staticBox2 = document.querySelector('.static-box-2');
let staticBox3 = document.querySelector('.static-box-3');
let staticBox4 = document.querySelector('static-box-4')
let staticBox5 = document.querySelector('.static-box-5')
let staticBox6 = document.querySelector('.static-box-6')
let finalDiv = document.querySelector('.final-div');
/* ---------------------------------*/


let prlxPic1Height = getComputedStyle(prlxPic1).height;
let prlxPic1Width = getComputedStyle(prlxPic1).width;



/* ------------------------- */

prlx1TopBorder = prlxPic1.getBoundingClientRect().top;

prlx4TopBorder = prlxPic4.getBoundingClientRect().top;

prlxStaticParBtm = prlxStaticBoxParent.getBoundingClientRect().bottom;

stickyLogoBottom = stickyLogo.getBoundingClientRect().bottom;

stickyLogoTop = stickyLogo.getBoundingClientRect().top;

prlxPic4Bottom = prlxPic4.getBoundingClientRect().bottom;


/* -------------------------  */


let halfPrlxPicWidth = prlxPic1.innerWidth / 2;
let halfPrlxPicHeight = prlxPic1.innerHeight / 2;


let halfStickyLogoWidth = stickyLogo.innerWidth / 2;
let halfStickyLogoHeight = stickyLogo.innerHeight / 2;

let leftBorderCenteredWidth = halfPrlxPicWidth - halfStickyLogoWidth;
let topBorderCenteredHeight = halfPrlxPicHeight - halfStickyLogoHeight;
/* -------------------------- */

window.addEventListener("scroll", function(event) {
   
  if(prlxPic1.getBoundingClientRect().top <= 0) {
    

    stickyLogo.style.position = 'fixed';
    stickyLogo.style.transform = 'translate(0vh, 0vh)';
    stickyLogo.style.left = '25vw';
    stickyLogo.style.transform = 'translate(-5vw, -5vw)'
    stickyLogo.style.top = '50vh';
    h1StickyLogoText.style.fontWeight = 'bold';
    h1StickyLogoText.style.fontSize = '2em';
    h1StickyLogoText.style.textDecoration = 'underline';
    h1StickyLogoText.style.color = 'white';
    h1StickyLogoText.style.textDecorationColor = 'black';
    
  } else if (prlxPic1.getBoundingClientRect().top < 0) {
    
    
    stickyLogo.style.position = 'relative';
    stickyLogo.style.transform = 'translate(0vh, 0vh)';
    
   stickyLogo.style.top = '-300vh'
   stickyLogo.style.left = '0vw';  
   
   stickyLogo.style.top = '50vh';
   h1StickyLogoText.style.fontWeight = 'bold';
   h1StickyLogoText.style.fontSize = '2em';
   h1StickyLogoText.style.textDecoration = 'underline';
   h1StickyLogoText.style.color = 'white';
   h1StickyLogoText.style.textDecorationColor = 'black';
  };
  
  if(prlxPic4.getBoundingClientRect().top <= 0) {
    
    stickyLogo.style.position = 'relative';
    stickyLogo.style.transform = 'translate(0vh, 0vh)';
    
   stickyLogo.style.top = '0vh'
   stickyLogo.style.left = '0px';
    
  } else if (prlxPic4.getBoundingClientRect().top > 0 && prlxPic1.getBoundingClientRect().top < 0) {
    
    stickyLogo.style.position = 'fixed';
    stickyLogo.style.left = '25vw';
    stickyLogo.style.transform = 'translate(-5vw, -5vw)'
    stickyLogo.style.top = '50vh';
    
  }
    
});






window.addEventListener("scroll", function(event) {
   
  if(prlxPic5.getBoundingClientRect().top <= 0) {
    
    

    stickyLogo2.style.position = 'fixed';
    stickyLogo2.style.left = '75vw';
    stickyLogo2.style.transform = 'translate(-5vw, -5vw)'
    stickyLogo2.style.top = '50vh';
    
    h1StickyLogoText2.style.fontWeight = 'bold';
    h1StickyLogoText2.style.fontSize = '2em';
    h1StickyLogoText2.style.textDecoration = 'underline';
    h1StickyLogoText2.style.color = 'white';
    h1StickyLogoText2.style.textDecorationColor = 'red';

  } else if (prlxPic5.getBoundingClientRect().top > 0) {
    
    
    stickyLogo2.style.position = 'relative';
    stickyLogo2.style.transform = 'translate(0vw, 0vw)';
    
   stickyLogo2.style.top = '-100vh'
   stickyLogo2.style.left = '0vw';  
   
    
   h1StickyLogoText2.style.fontWeight = 'bold';
   h1StickyLogoText2.style.fontSize = '2em';
   h1StickyLogoText2.style.textDecoration = 'underline';
   h1StickyLogoText2.style.color = 'white';
   h1StickyLogoText2.style.textDecorationColor = '#dd1010';
  };
    
});

window.addEventListener("scroll", function(){
  if(prlxPic6.getBoundingClientRect().top <= 0) {
    stickyLogo2.style.position = 'relative';
    stickyLogo2.style.top = '0vh';
    stickyLogo2.style.left = '0vw';
    stickyLogo2.style.transform = 'translate(0vw, 0vh)';
  };
});



//The code below is to keep the sticky prlx pictures from showing when they slide down.
window.addEventListener("scroll", function() {
  
  if (prlxPic4.getBoundingClientRect().top > 0) {
    
    prlxPic1.style.position = 'sticky';
    prlxPic2.style.position = 'sticky';
    prlxPic3.style.position = 'sticky';  
    
 } else if (prlxPic4.getBoundingClientRect().top <= 0) {
   
    prlxPic1.style.position = 'relative';
    prlxPic2.style.position = 'relative';
    prlxPic3.style.position = 'relative';
 };
});





// I am tring to separate the if statements into separate event listeners in order to keep the transition from taking place when I don't want it to. I may be able to get inspiration from another parallax codepen proj to see how I prevented it before.