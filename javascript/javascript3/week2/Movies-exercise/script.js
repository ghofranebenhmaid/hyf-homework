//1. Create an array of bad movies.

const tags = movies
   .filter((items) => {
      let rating = items.rating;
      if (rating < 4) return items;
   })
   .map((items) => items);

console.log(tags);

//2. Creat an array of bad movies since year 2000.

const badMovies = movies
   .filter((items) => {
      let rating = items.rating;
      let year = items.year;
      if (rating < 4 && year >= 2000) return items;
   })
   .map((items) => items);

console.log(badMovies);

//3. Create an array of the titles of the bad movies since year 2000.

const badMoviesTitle = movies
   .filter((items) => {
      let rating = items.rating;
      let year = items.year;
      if (rating < 4 && year >= 2000) return items;
   })
   .map((items) => items.title);

console.log(badMoviesTitle);

// Promise Resolve After

function promiseResolveAfter(resolveAfter) {
   setTimeout(() => {
      console.log(`I am called asynchronously`);
   }, resolveAfter * 1000);
}

promiseResolveAfter(6);

//Fetching and waiting
