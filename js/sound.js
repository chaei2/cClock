function play() {
  const gameSound = document.getElementById('btnSound');
  const devilSound = document.getElementById('devilSound');

  // 다른 소리 끄기
  devilSound.pause();
  devilSound.currentTime = 0;

  clickDownSound.pause();

  // 게임 소리
  gameSound.currentTime = 0;
  gameSound.play();
}

document.getElementById('imgesBtn').addEventListener('mouseenter', () => {
  const gameSound = document.getElementById('btnSound');
  const devilSound = document.getElementById('devilSound');

  // 다른 소리 끄기
  gameSound.pause();
  gameSound.currentTime = 0;

  clickDownSound.pause();

  // 악마 소리
  devilSound.currentTime = 0;
  devilSound.play();
});
