
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const volumeSlider = document.querySelector('.volume');
const speedSlider = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Functions
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleRewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

function handleForward() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

function handleVolumeChange() {
  video.volume = volumeSlider.value;
}

function handleSpeedChange() {
  video.playbackRate = speedSlider.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
}

function scrub(e) {
  const scrubTime = (progress.value / 100) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);
rewindButton.addEventListener('click', handleRewind);
forwardButton.addEventListener('click', handleForward);

volumeSlider.addEventListener('input', handleVolumeChange);
speedSlider.addEventListener('input', handleSpeedChange);

progress.addEventListener('input', scrub);
