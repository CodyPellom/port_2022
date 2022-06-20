let navbarHeader = document.getElementById('navbar-header');
let heroHeader = document.getElementById('hero-header');
let introSec = document.getElementById('intro-section');
let introHeader = document.getElementById('intro-header');
let introAnimatedText = document.getElementById('intro-header-animated-text');
let introDescrip = document.getElementById('intro-descrip-text');
let introImgSlider = document.getElementById('intro-image-changer');
let introImg1 = document.getElementById('introImg1');
let introImg2 = document.getElementById('introImg2');
let introImg3 = document.getElementById('introImg3');
let introImg4 = document.getElementById('introImg4');
let introImg5 = document.getElementById('introImg5');
let introImg6 = document.getElementById('introImg6');
let introImgText = document.getElementById('introImgTxt');
let weNextBtn1 = document.getElementById('we-next-1');
let weNextBtn2 = document.getElementById('we-next-2');
let weNextBtn3 = document.getElementById('we-next-3');

setInterval(function(){
    navbarHeader.classList = "major-mono";
}, 1500);

setInterval(function(){
    navbarHeader.classList = "major-mono neon";
}, 1100);

/*timeline example
var introAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 12000,
    targets: introSec,
    loop: true
  });
  
  // Add children
  introAnimation
  .add({
    backgroundColor: "#adffe1",
  })
  .add({
    backgroundColor: "#9bffda",
  })
*/
var typewriter = new Typewriter(introHeader, {
    //loop: true
});

typewriter.typeString('whoami').start();

var introTyper = new Typewriter(introImgText, {});

// let type2 = new Typewriter(introDescrip, {});
// type2.typeString(`my name is cody pellom. i am a professional web developer and software engineer who specializes in 
// cms development. i have been a developer for over 5 years and have worked with companies such as HPE,
// CPI and Applied Systems. by participating in and leading several cms overhauls, my work has been 
// seen by millions of different people. i enjoy creating immersive and animated user experiences. `).start();
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('my work has been seen by millions of people')
    // .pauseFor(2500)
    // //.deleteChars(7)
    // .deleteAll()
    // .typeString('i create art through web development')
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString(`i've helped high profile companies optimize their CMS experiences`)
    // .pauseFor(2500)
    // .deleteChars(40)
    // .start();

    function imgSlideOut(img) {
        anime({
            targets: img,
            easing: 'easeOutExpo',
            duration: 500,
            opacity: 0,
            display: 'none'
        })
    }
    function imgSlideIn(img) {
        anime({
            targets: img,
            easing: 'easeOutExpo',
            opacity: 0,
            opacity: 1,
            duration: 500,
            //display: 'unset'
        })
    }
    let imgCount = introImgSlider.childElementCount;
    let initSlideCount = 0; 

    setInterval(function(){
        initSlideCount++;
        if (initSlideCount === 6) {
            initSlideCount = 0;
        }
        if (initSlideCount === 0) {
            introImg1.style.opacity = '1';
            introImg2.style.opacity = '0';
            introImg3.style.opacity = '0';
            introImg4.style.opacity = '0';
            introImg5.style.opacity = '0';
            introImg6.style.opacity = '0';
            introTyper.deleteAll();
            introTyper.typeString('A Professional').start();
        }
        if (initSlideCount === 1) {
            introImg1.style.opacity = '0';
            introImg2.style.opacity = '1';
            introImg3.style.opacity = '0';
            introImg4.style.opacity = '0';
            introImg5.style.opacity = '0';
            introImg6.style.opacity = '0';
            introTyper.deleteAll();
            introTyper.typeString('A Family Man').start();
        }
        if (initSlideCount === 2) {
            introImg1.style.opacity = '0';
            introImg2.style.opacity = '0';
            introImg3.style.opacity = '1';
            introImg4.style.opacity = '0';
            introImg5.style.opacity = '0';
            introImg6.style.opacity = '0';
            introTyper.deleteAll();
            introTyper.typeString('A Hopeless Romantic').start();
        }
        if (initSlideCount === 3) {
            introImg1.style.opacity = '0';
            introImg2.style.opacity = '0';
            introImg3.style.opacity = '0';
            introImg4.style.opacity = '1';
            introImg5.style.opacity = '0';
            introImg6.style.opacity = '0';
        }
        if (initSlideCount === 4) {
            introImg1.style.opacity = '0';
            introImg2.style.opacity = '0';
            introImg3.style.opacity = '0';
            introImg4.style.opacity = '0';
            introImg5.style.opacity = '1';
            introImg6.style.opacity = '0';
            introTyper.deleteAll();
            introTyper.typeString('Sometimes Spooky ...').start();
        }
        if (initSlideCount === 5) {
            introImg1.style.opacity = '0';
            introImg2.style.opacity = '0';
            introImg3.style.opacity = '0';
            introImg4.style.opacity = '0';
            introImg5.style.opacity = '0';
            introImg6.style.opacity = '1';
            introTyper.deleteAll();
            introTyper.typeString('Sometimes Goofy').start();
        }
    }, 6500);