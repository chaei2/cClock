const buttonPush = document.getElementById('imgesBtn');
const box1 = document.querySelector('.box1');

buttonPush.addEventListener('click', colorChange);

function colorChange() {
  // alert('hi');
  document.body.style.mixBlendMode = 'difference';
  box1.style.background = 'var(--gradientBtn)';

  setTimeout(() => {
    box1.style.background = 'var(--gradientBox)';
    document.body.style.mixBlendMode = 'normal';
  }, 2000);
}
