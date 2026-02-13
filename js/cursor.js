const cursor = document.querySelector('.cur'); // 커서 이미지 요소

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.src = './source/img2/hand3.svg';
});

// 떼면 (놓기)
document.addEventListener('mouseup', () => {
  cursor.src = './source/img2/hand2.svg';
});
