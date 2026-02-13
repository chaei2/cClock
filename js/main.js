const canvasContainer = document.getElementById('canvas-container');
let renderer;

const INITIAL_W = 2000;
const INITIAL_H = 650;
const INITIAL_RATIO = INITIAL_W / INITIAL_H;

let hX1 = -185;
let hX2 = 135;

let mX1 = 495;
let mX2 = 800;

let sX1 = 1165;
let sX2 = 1470;

// y에 떨어지는 속도를 줄거라 일ㅂ러 따로 뻄
let hY1 = 0;
let hY2 = 0;

let mY1 = 0;
let mY2 = 0;

let sY1 = 0;
let sY2 = 0;

// 애니메이션 상태
let hDropping = false;
let mDropping = false;
let sDropping = false;

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

  if (hDropping) {
    hY1 += 70;
    hY2 += 70;
    if (hY1 > INITIAL_H) hY1 = -325;
    if (hY2 > INITIAL_H) hY2 = -325;
  }

  image(tileImgs[h1], hX1, hY1);
  image(tileImgs[h2], hX2, hY2);

  let m1 = Number(mm[0]); // 십의 자리
  let m2 = Number(mm[1]); // 일의 자리

  if (mDropping) {
    mY1 += 70;
    mY2 += 70;
    if (mY1 > INITIAL_H) mY1 = -325;
    if (mY2 > INITIAL_H) mY2 = -325;
  }

  image(tileImgs[m1], mX1, mY1);
  image(tileImgs[m2], mX2, mY2);

  let s1 = Number(ss[0]); // 십의 자리
  let s2 = Number(ss[1]); // 일의 자리

  if (sDropping) {
    sY1 += 70;
    sY2 += 70;
    if (sY1 > INITIAL_H) sY1 = -325;
    if (sY2 > INITIAL_H) sY2 = -325;
  }

  image(tileImgs[s1], sX1, sY1);
  image(tileImgs[s2], sX2, sY2);
}

function mousePressed() {
  // 색 바꾸기

  // hh
  if (
    mouseX >= 0 &&
    mouseX <= INITIAL_W / 3 &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor1 = '#FF0000';
    hDropping = true;

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor1 = '#6C1B00';
    }, 1000);

    // 1초 후 멈추고 초기 위치로 복귀
    setTimeout(() => {
      hDropping = false;
      hY1 = 0;
      hY2 = 0;
    }, 3000);
  }

  // mm
  if (
    mouseX >= INITIAL_W / 3 &&
    mouseX <= (INITIAL_W / 3) * 2 &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor2 = '#000ac5';
    mDropping = true;
    // 바꾸고 싶은 색

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor2 = '#003C70';
    }, 1000);

    setTimeout(() => {
      mDropping = false;
      mY1 = 0;
      mY2 = 0;
    }, 3000);
  }

  // ss
  if (
    mouseX >= (INITIAL_W / 3) * 2 &&
    mouseX <= INITIAL_W &&
    mouseY >= 0 &&
    mouseY <= INITIAL_H
  ) {
    bgColor3 = '#d4cd01';
    sDropping = true;
    // 바꾸고 싶은 색

    // 2초 후 원래 색으로 복귀
    setTimeout(() => {
      bgColor3 = '#777300';
    }, 1000);

    setTimeout(() => {
      sDropping = false;
      sY1 = 0;
      sY2 = 0;
    }, 3000);
  }
}
