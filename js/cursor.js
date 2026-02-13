const cursor = document.querySelector('.cur');

const clickDownSound = document.getElementById('clickDownSound');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.src = './source/img2/hand3.svg';

  clickDownSound.currentTime = 0;
  clickDownSound.play();
});

// 떼면 (놓기)
document.addEventListener('mouseup', () => {
  cursor.src = './source/img2/hand2.svg';
});
