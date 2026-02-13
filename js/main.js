const canvasContainer = document.getElementById('canvas-container');
let renderer;

const INITIAL_W = 2000;
const INITIAL_H = 650;
const INITIAL_RATIO = INITIAL_W / INITIAL_H;

// y에 떨어지는 속도를 줄거라 일ㅂ러 따로 뻄
let hY1 = -185;
let hY2 = 135;

let mY1 = 495;
let mY2 = 800;

let sY1 = 1165;
let sY2 = 1470;

// 맥 키보드 백콤 쓰는법-> 한영키 + ₩키 동시에 누름됨

let bgColor1 = '#6C1B00';
let bgColor2 = '#003C70';
let bgColor3 = '#777300';

let reH = null;
let reM = null;
let reS = null;
const IMGS = {
  0: [0],
  1: [1],
  2: [2],
  3: [3],
  4: [4],
  5: [5],
  6: [6],
  7: [7],
  8: [8],
  9: [9],
  // '-': [10, 9, 10],
  // ' ': [10, 10, 10],
};

let tileImgs = [];

// 해치웠나?
function preload() {
  for (let n = 0; n <= 9; n++) {
    tileImgs[n] = loadImage(`./source/img/${n}.png`);
  }
}

function setup() {
  render = createCanvas(INITIAL_W, INITIAL_H);
  render.parent(canvasContainer);
  render.elt.style.aspectRatio = `${INITIAL_W} / ${INITIAL_H}`;

  new ResizeObserver(() => {
    const { width: containerWidth, height: containerHeight } =
      canvasContainer.getBoundingClientRect();
    render.elt.style.width = `${containerWidth}px`;
    render.elt.style.height = `${INITIAL_H}px`;
  }).observe(canvasContainer);
}

function draw() {
  background(bgColor3);
  noStroke();

  fill(bgColor1);
  rect(0, 0, INITIAL_W / 3, INITIAL_H);

  fill(bgColor2);
  rect(INITIAL_W / 3, 0, INITIAL_W / 3, INITIAL_H);

  const hh = String(hour()).padStart(2, '0');

  const mm = String(minute()).padStart(2, '0');
  const ss = String(second()).padStart(2, '0');

  let h1 = Number(hh[0]); // '0' → 0
  let h2 = Number(hh[1]); // '9' → 9
  tint(50, 0, 0, 150);
  image(tileImgs[h1], hY1, 0);

  image(tileImgs[h2], hY2, 0);

  let m1 = Number(mm[0]); // 십의 자리
  let m2 = Number(mm[1]); // 일의 자리

  image(tileImgs[m1], mY1, 0);
  image(tileImgs[m2], mY2, 0);

  let s1 = Number(ss[0]); // 십의 자리
  let s2 = Number(ss[1]); // 일의 자리

  image(tileImgs[s1], sY1, 0);
  image(tileImgs[s2], sY2, 0);
}

function mousePressed() {
  // 색 바꾸기
  if (
    mouseX >= 0 &&
    mouseX <= INITIAL_W / 3 &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor1 = '#FF0000';

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor1 = '#6C1B00';
    }, 1000);
  }

  if (
    mouseX >= INITIAL_W / 3 &&
    mouseX <= (INITIAL_W / 3) * 2 &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor2 = '#000ac5';
    // 바꾸고 싶은 색

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor2 = '#003C70';
    }, 1000);
  }

  if (
    mouseX >= (INITIAL_W / 3) * 2 &&
    mouseX <= INITIAL_W &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor3 = '#d4cd01';
    // 바꾸고 싶은 색

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor3 = '#777300';
    }, 1000);
  }
}
