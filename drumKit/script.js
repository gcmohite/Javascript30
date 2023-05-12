'use strict';

const allKeys = document.querySelectorAll('.key');

function playSound(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.add('playing');
  // console.log(key);

  if (!audio) return; // guard clause
  // console.log(audio);

  // rewind to start if key pressed when already playing
  audio.currentTime = 0;

  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
  this.classList.remove('playing');
}

allKeys.forEach((key) =>
  // we are listening on the event 'transitionend' on every key and after transition has ended, we are removing the .playing class on the key element
  key.addEventListener('transitionend', removeTransition)
);
window.addEventListener('keydown', playSound);
