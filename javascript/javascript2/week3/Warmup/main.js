const btn = document.getElementById('btn1');
btn.addEventListener('click', myFunction);

function myFunction() {
   setTimeout(function func() {
      console.log('Hello..');
   }, 2000);
}

//1 setTimeout

setTimeout(() => {
   console.log('Called after 2.5 seconds');
}, 2500);

//2
function callString(delay, stringToLog) {
   setTimeout(() => {
      console.log(stringToLog);
   }, delay);
}

callString(3500, 'Called after 3.5 seconds');

//3
const btn2 = document.getElementById('btn2').addEventListener('click', () => {
   callString(4500, 'Called after 4.5 seconds');
});

//4
const earthLogger =  () => console.log('Earth');
const saturnLogger = _ => console.log('Saturn');

function planetLogFunction(e) {
   earthLogger();
   saturnLogger();
}
planetLogFunction();

//5

navigator.geolocation.getCurrentPosition( (position)  => { position;
    
   const btn3 = document.getElementById('btn3')
   .addEventListener('click', ()  => {
   const str = document.getElementById('elemenet');
   str.innerHTML = `This is the latitude : ${position.coords.latitude} <br>
                   This is the longitude : ${position.coords.longitude}`;
   });
});


//6
navigator.geolocation.getCurrentPosition(position => {
   position;

   function myMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 12,
      });
    }
    myMap()
   });
   
//7

function runAfterDelay(delay, callback) {
   setTimeout(() => {
      callback(); 
   }, delay * 1000);
}
runAfterDelay(4, function () {
   console.log(`Should be logged after 4 second`);
});
runAfterDelay(2, function () {
   console.log(`Should be logged after 2 second`);
});
runAfterDelay(7, function () {
   console.log(`Should be logged after 7 second`);
});

//8

 const clk = document.getElementsById("body").addEventListener("dblclick", myFunction);

 function myFunction() {
   document.getElementById("dbl").innerHTML = "double-clicked!";

 }


 myFunction();