const btn = document.querySelector('.btn');
const audio = document.querySelector('audio');

btn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});
