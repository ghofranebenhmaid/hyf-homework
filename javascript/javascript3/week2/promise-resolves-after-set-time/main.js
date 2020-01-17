const api = 'https://yesno.wtf/api';
  const api2 = 'https://dog.ceo/api/breeds/image/random';
  const api3 = 'http://api.open-notify.org/astros.json';
function fetchImg() {
    fetch(api3)
    .then(res => res.json())
    .then(result => {
        console.log(result);
        
    });
    
}

setTimeout(fetchImg, 3000)



