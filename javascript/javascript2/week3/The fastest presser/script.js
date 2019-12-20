const input = document.getElementById('input').value;
const button = document.getElementById('btn').addEventListener('click', countDownSc);

const pressL = document.getElementById('pressL');
const pressS = document.getElementById('pressS');
window.addEventListener('keydown', Key, true);
let countL = 0;
let countS = 0;

function Key(e) {
   if (e.keyCode == '76') {
      countL += 1;
   } else if (e.keyCode == '83') {
      countS += 1;
   }
   pressL.innerHTML = `Press L <br> ${countL}`;
   pressS.innerHTML = `Press S <br> ${countS}`;
}

function countDownSc()  {
   let seconds = document.getElementById('input').value;

   if (seconds > 0) {
      let countdown = setInterval(function() {
         seconds--;

         if (seconds <= 0) {
            clearInterval('countdown');
            seconds = 0;
         }
         document.getElementById('countdown').innerHTML = `${seconds} second`;
      }, 1000);
   }
}
