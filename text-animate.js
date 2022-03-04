var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1250,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

  var h1Element = document.querySelectorAll('.ml7');

function animateHeading(el, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

function enterHeading(el) {
  animateHeading(el, 1.3, 800, 400)
};

function leaveHeading(el) {
  animateHeading(el, 1.0, 600, 300)
};

for (var i = 0; i < h1Element.length; i++) {
  h1Element[i].addEventListener('mouseenter', function(e) {
    enterHeading(e.target);
  }, false);
  
  h1Element[i].addEventListener('mouseleave', function(e) {
    leaveHeading(e.target)
  }, false);  
}