const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
let imageIndex = 0;
let autoPlayInterval = null;
const intervalTime = 2000;

const imageEl = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

function showImage() {
  imageEl.src = images[imageIndex];
}

function forwardImage() {
  imageIndex = (imageIndex + 1) % images.length;
  showImage();
}

function backwardImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  showImage();
}

function startAutoPlay(direction) {
  stopAutoPlay(); // clear any existing interval
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

  autoPlayInterval = setInterval(() => {
    if (direction === "forward") {
      forwardImage();
    } else if (direction === "backward") {
      backwardImage();
    }
  }, intervalTime);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

forwardBtn.addEventListener("click", forwardImage);
backwardBtn.addEventListener("click", backwardImage);
autoForwardBtn.addEventListener("click", () => startAutoPlay("forward"));
autoBackwardBtn.addEventListener("click", () => startAutoPlay("backward"));
stopBtn.addEventListener("click", stopAutoPlay);
