// Settimeout as a promise

function getMessage() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('I am resolved from setTimeout');
         // reject ('There is an error');
      }, 3000);
   });
}

getMessage().then((msg) => console.log(msg));

// Get current location

function getLocation() {
   return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
         resolve(
            `Latitude: ${position.coords.latitude} & Longitude: ${position.coords.longitude}`
         );
      });
   });
}

getLocation()
   .then((location) => console.log(location))
   .catch((error) => {
      console.log(error);
   });
