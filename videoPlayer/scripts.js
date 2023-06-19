// Selecting elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

// Defining event handlers
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  video.paused ? (toggle.textContent = '►') : (toggle.textContent = '❚ ❚');
}

function skip() {
  // console.log(Number(this.dataset.skip));
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(video.currentTime);
}

function handleRangeUpdate() {
  // console.log(this.value);
  // console.log(this.name);
  video[this.name] = parseFloat(this.value);
}

function handleProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercent}%`;
}

function seek(e) {
  const scrubTime = e.offsetX / progress.offsetWidth;
  const seekToTime = scrubTime * video.duration;
  video.currentTime = seekToTime;
  // console.log(e.offsetX);
}

// Setting event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('play', handleProgress);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener('click', skip);
});

ranges.forEach((slider) => {
  slider.addEventListener('change', handleRangeUpdate);
});

let mousedown = false;

progress.addEventListener('click', seek);
progress.addEventListener('mousemove', (e) => mousedown && seek(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
