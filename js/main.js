const canvasContainer = document.getElementById('canvas-container');
let renderer;

const INITIAL_W = 2000;
const INITIAL_H = 650;
const INITIAL_RATIO = INITIAL_W / INITIAL_H;

// 맥 키보드 백콤 쓰는법-> 한영키 + ₩키 동시에 누름됨

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

function preload() {
  for (let n = 0; n <= 9; n++) {
    tileImgs[n] = loadImage(`source/img/${n}.png`);
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
  background('#777300');
  noStroke();

  fill('#6C1B00');
  rect(0, 0, INITIAL_W / 3, INITIAL_H);

  fill('#003C70');
  rect(INITIAL_W / 3, 0, INITIAL_W / 3, INITIAL_H);

  const hh = String(hour()).padStart(2, '0');

  const mm = String(minute()).padStart(2, '0');
  const ss = String(second()).padStart(2, '0');

  let h1 = Number(hh[0]); // '0' → 0
  let h2 = Number(hh[1]); // '9' → 9
  tint(50, 0, 0, 150);
  image(tileImgs[h1], -160, 0);

  image(tileImgs[h2], 160, 0);

  let m1 = Number(mm[0]); // 십의 자리
  let m2 = Number(mm[1]); // 일의 자리

  image(tileImgs[m1], 495, 0);
  image(tileImgs[m2], 800, 0);

  let s1 = Number(ss[0]); // 십의 자리
  let s2 = Number(ss[1]); // 일의 자리

  image(tileImgs[s1], 1165, 0);
  image(tileImgs[s2], 1470, 0);
}
