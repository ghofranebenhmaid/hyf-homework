//Weather app
//Use my current position optional

const KELVIN = 273;
const key = '5f88cc0ee2aac21d465d480c160abd04';

const inputLocation = document.getElementById('input');
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const location = inputLocation.value;
   fetchFunc(location)
   fetchLocation();
});

// const btnLocation = document.getElementById('btn-location');
// btnLocation.addEventListener('click', function(e) {
//    e.preventDefault();
//    //fetchFunc(location)
//    fetchLocation();
// });


function fetchFunc(location) {

   let api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
   fetch(api)
      .then((r) => r.json())
      .then((res) => {
         console.log(res);
         rendemFunc(res);
      });
}

function geoLocation() {
   navigator.geolocation.watchPosition((position) => {
      position;

      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      fetchLocation(lat, lon);
   });
}

function fetchLocation(lat, lon) {
   let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
   fetch(api)
      .then((r) => r.json())
      .then((res) => {
         console.log(res);
         rendemFunc(res);
      });
   geoLocation();
}
function rendemFunc(data) {
   let tempElement = Math.floor(data.main.temp - KELVIN);

   const iconElement = document.querySelector('.weather-icon');
   iconElement.innerHTML = `<img src="icons/${data.weather[0].icon}.png"/>`;

   const temperatureElement = document.querySelector('.temperature-value');
   temperatureElement.innerHTML = `<p>${tempElement}°<span>C</span></p>`;

   const descElement = document.querySelector('.temperature-description');
   descElement.innerHTML = `<p>${data.weather[0].description}</p>`;

   const windElement = document.querySelector('.wind-speed');
   windElement.innerHTML = `<p>${data.wind.speed} <span>m/s</span></p>`;

   const locationElement = document.querySelector('.location');
   locationElement.innerHTML = `<p>${data.name}<i class="fa fa-map-marker fa-fw"></p>`;

   function unixTime(unix) {
      let date = new Date(unix * 1000);
      let time = `${date.getHours()}:${date.getMinutes()}`;
      return time;
   }

   const sunriseElement = document.querySelector('.sunrise-and-sunset');
   sunriseElement.innerHTML = `${unixTime(
      data.sys.sunrise
   )}  <img src="https://img.icons8.com/plasticine/100/000000/sunrise.png">  - ${unixTime(
      data.sys.sunset
   )} <img src="https://img.icons8.com/plasticine/100/000000/sunset.png">`;

   let latitude = data.coord.lat;
   let longitude = data.coord.lon;
   console.log(latitude, longitude);
   
   function myMap() {

      map = new google.maps.Map(document.querySelector('.map'), {
         center: { lat: latitude, lng: longitude },
         zoom: 12
      });
   }
   myMap();
}
