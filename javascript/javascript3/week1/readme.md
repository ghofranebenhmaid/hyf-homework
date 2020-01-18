# Readme 


Create a [WeatherApp](https://htmlpreview.github.io/?https://github.com/benhmaid/hyf-homework/blob/master/javascript/javascript3/week1/WeatherApp-location/index.html) that based on a users _location_ can find the relevant weather for that user.

> [WeatherApp](https://htmlpreview.github.io/?https://github.com/benhmaid/hyf-homework/blob/master/javascript/javascript3/week1/WeatherApp-location/index.html)

__Fetch weather json data__ from the api using a city a user has specified: Add an __input element__ and a __button__ to the html. When the button is clicked, get the text from the input (which should be a city name) and fetch the relevant weather data from that city.

```javascript
fetch(api)
      .then((r) => r.json())
      .then((res) => {
         console.log(res);
         rendemFunc(res);
      });
```     
> [GiphyApi](https://htmlpreview.github.io/?https://github.com/benhmaid/hyf-homework/blob/master/javascript/javascript3/week1/GiphyApi/index.html)

