document.addEventListener('DOMContentLoaded', function(){

  const canvas = document.querySelector('canvas');
  const speed = 1000 / 20;

  class Bubble {

    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.setCanvasSize(canvas);
    }

    setCanvasSize(frame) {
      frame.width = window.innerWidth;
      frame.height = window.innerHeight;
    }

    drawCircle() {
      const radius = 70;
      const centerX = 100;
      const centerY = 150;

      this.ctx.beginPath();
      this.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      this.fillStyle = 'green'
    }

    init() {
    }
  }

  var bubble = new Bubble(canvas)

  bubble.init();

  setTimeout(function(){
    bubble.init();
  }, 5000);

})
