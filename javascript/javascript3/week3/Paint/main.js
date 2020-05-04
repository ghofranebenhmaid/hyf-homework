let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
   constructor(x, y, r, startAngle, endAngle, fillColor) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
      this.fillColor = fillColor;
   }
   draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
      ctx.fillStyle = this.fillColor;
      ctx.fill();
   }
}

// let c1 = new Circle(60, 160, 30, 0, 2 * Math.PI, '#f31');
// c1.draw(ctx);

function randomCircles() {
   setInterval(() => {
      const coordX = Math.floor(Math.random() * 2000);
      const coordY = Math.floor(Math.random() * 1000);
      const randomRadius = Math.floor(Math.random() * 50);

      function randomColor() {
         return (
            'rgb(' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ')'
         );
      }
      function getNewCircle() {
         return new Circle(coordX, coordY, randomRadius, 0, 100, randomColor());
      }

      getNewCircle().draw();
      //randomCircles().draw();
   }, 500);
}


/* Draw */
let painting = false;

function draw(e) {
   if (!painting) return;
   ctx.lineWidth = 5;
   ctx.lineCap = 'round';
   //ctx.strokeStyle = 'blue';
   ctx.lineTo(e.clientX, e.clientY);
   ctx.stroke();
   //ctx.beginPath();
   //ctx.moveTo(e.clientX, e.clientY);
}

function startPos(e) {
   painting = true;
   draw(e);
}

function finishPos() {
   painting = false;
   ctx.beginPath();
}
function d() {
   document.addEventListener('mousedown', startPos);
   document.addEventListener('mouseup', finishPos);
   document.addEventListener('mousemove', draw);
}

document.getElementById('draw_btn').addEventListener('click', d);
document.getElementById('btn1').addEventListener('click', randomCircles);
document.getElementById('refresh_btn').addEventListener('click', refreshPage);


const cursor =  document.getElementById('cursor');
document.addEventListener('mousemove', function (e)
   {
   let x = e.clientX;
   let y = e.clientY;
   cursor.style.left = x + "px";
   cursor.style.top = y + "px";
});

function refreshPage() {
   window.location.reload();
}