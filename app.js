const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const drum = document.querySelector(`g[data-key="${e.keyCode}"]`);
  console.log(drum);

  if (!audio) return;
  if (!key) return;
  if (!drum) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');

  animateSVG(drum);
}

function animateSVG(drum) {
  drum.classList.add('animate');
  setTimeout(() => {
    drum.classList.remove('animate');
  }, 300);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}
