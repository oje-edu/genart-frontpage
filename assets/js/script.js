let canvasPosition = canvas.getBoundingClientRect();
const image1 = new Image();
image1.src = 'data:image/webp;base64,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';


image1.addEventListener('load', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 318;
  canvas.heigth = 159;
  const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient1.addColorStop('0.5', 'crimson');
  gradient1.addColorStop('0.7', 'gold');
  gradient1.addColorStop('0.9', 'yellow');

  let switcher = 1;
  let counter = 0;
  setInterval(function () {
    counter++;
    if (counter % 33 === 0) {
      switcher *= -1;
    }
  }, 500)

  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);

  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // console.log(scannedImage);
  // Array size 384000/4=96000
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let particlesArray = [];
  const numberOfParticles = 7000;

  let mappedImage = [];
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
      const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
      const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [
        cellBrightness = brightness,
        cellColor = 'rgb(' + red + ',' + green + ',' + blue + ')',
      ];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  function calculateRelativeBrightness(red, green, blue) {
    return Math.sqrt(
      (red * red) * 0.299 +
      (green * green) * 0.587 +
      (blue * blue) * 0.114
    )/100;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.speed = 0;
      this.velocity = Math.random() * 1.2 + 1;
      this.size = Math.random() * 1.5 + 1;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.angle = 0;
    }
    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      if ((mappedImage[this.position1]) && (mappedImage[this.position1][this.position2])) {
        this.speed = mappedImage[this.position1][this.position2][0];
      }
      
      let movement = (1.25 - this.speed) + this.velocity;
      this.angle += this.speed / 50;
      this.size = this.speed * 0.15;

      if (switcher === 1) {
        ctx.globalCompositeOperation = 'luminosity';
        
      } else {
        ctx.globalCompositeOperation = 'source-over';       
      }
      if (counter % 88 === 0) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        //this.y = 0;
      }

      // this.y -= movement - Math.cos(this.angle) * 0.3;
      this.y += movement + Math.sin(this.angle) * 0.5;
      this.x += movement + Math.cos(this.angle) / 0.5;
      if (this.y >= canvas.height) {
        this.y = Math.random() * canvas.height * 2;
        this.x = Math.random() * canvas.width;
      }
      if (this.x >= canvas.width) {
        // this.x = 0;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }
      // if (this.x <= 0) {
      //   this.y = canvas.height;
      //   this.x = Math.random() * canvas.width;
      // }
      // if (this.x >= canvas.width) {
      //   this.x = this.x = Math.random() * canvas.width;
      //   this.y = canvas.height;
      // }
    }
    draw() {
      ctx.beginPath();
      if ((mappedImage[this.position1]) && (mappedImage[this.position1][this.position2])) {
        ctx.fillStyle = mappedImage[this.position1][this.position2][0];
        ctx.strokeStyle = mappedImage[this.position1][this.position2][1];
      }
      ctx.fillStyle = gradient1;
      //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.strokeRect(this.x, this.y, this.size * 2, this.size);
      ctx.fill();
    }
  }
  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle);
    }
  }
  init();

  function animate() {
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.7;
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.55;
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
})

window.addEventListener('resize', function () {
  canvasPosition = canvas.getBoundingClientRect();
  generateRandomTree();
})