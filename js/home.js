let navbarHeader = document.getElementById('navbar-header');
let heroHeader = document.getElementById('hero-header');
let introSec = document.getElementById('intro-section');
let introHeader = document.getElementById('intro-header');
let introAnimatedText = document.getElementById('intro-header-animated-text');
let introDescrip = document.getElementById('intro-descrip-text');
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
  .add({
    backgroundColor: "#89ffd3",
  })
  .add({
    backgroundColor: "#75ffcc",
  })
  .add({
    backgroundColor: "#89ffd3",
  })
  .add({
    backgroundColor: "#9bffda",
  })
  .add({
    backgroundColor: "#adffe1",
  })
  */
var typewriter = new Typewriter(introHeader, {
    //loop: true
});

typewriter.typeString('whoami').start();

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