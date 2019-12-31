//Weather app
//Fetch weather data from a city

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('input');
const inpunNum = document.getElementById('number');
const resultsEl = document.getElementById('gif-img');

searchForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const keyword = searchInput.value;
   const num = inpunNum.value;
   giphySearch(keyword, num);
});

function giphySearch(keyword, num) {
   const key = 'sm8PT5ioGhyR8AEZDFMCLMqGERfwzMSO';
   let api2 = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=${num}&offset=0&rating=G&lang=en`;
   fetch(api2)
      .then(function(res) {
         return res.json();
      })
      .then(function(json) {
         console.log(json.data[0].images.fixed_width.url);
         let resultsHTML = '';

         json.data.forEach(function(obj) {
            console.log(obj);

            const url = obj.images.fixed_width.url;
            const width = obj.images.fixed_width.width;
            const height = obj.images.fixed_width.height;
            const title = obj.title;

            resultsHTML += `<img class="gif-item" src="${url}" width="${width}" height ="${height}" alt="${title}">`;
         });
         resultsEl.innerHTML = resultsHTML;
      })
      .catch(function(err) {
         console.log(err.message);
      });
}
