let heroHeader = document.getElementById('hero-header');
heroHeader.style.color = 'pink';

/*timeline example*/
var heroAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2000
  });
  
  // Add children
  heroAnimation
  .add({
    targets: heroHeader,
    color: "red",
  })
  .add({
    //targets: '.basic-timeline-demo .el.circle',
    color: "green",
  })
  .add({
    //targets: '.basic-timeline-demo .el.triangle',
    color: "purple",
  });