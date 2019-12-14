
//1 Movies with a short title
const shortestTitleMovies = movies
.filter((items) => {
   let titles = items.title;
   let words = titles.split(" ");
   if (words.length <= 1) return true;
   else return false;
})
.map((items) => items.title);

console.log(shortestTitleMovies);


//2 long movie titles
const longMoviesTitle = movies
.filter((items) => {
   let titles = items.title;
   let words = titles.split(" ");
   if (words.length >= 2) return true;
   else return false;
})
.map((items) => items.title);

console.log(longMoviesTitle);

//3 number of movies made between 1980-1989
let count = 0;
const numMoviesIn8089 = movies
   .filter((items) => items.year >= 1980 && items.year <= 1989)
   .reduce((items) =>  count++);

console.log(numMoviesIn8089);

//4 Extra key called tag

const tags = movies
.filter((items) => {
  let rating = items.rating;
   if (rating >= 7) return ({tag: 'Good'});
   else if (rating >= 4 && rating < 7 ) return ({tag: 'Average'});
   else if (rating < 4) return ({tag: 'Bad'});
})
.map((items) => items );

console.log(tags);

//5.Movies rated higher than 6
const ratedHigherThan6 = movies
    .filter(items => items.rating > 6).map(items => items);

    console.log(ratedHigherThan6);
    
//6.Count the total number of movies


let total = 0;
const totalNumber = movies
.filter((items) => {
   let titles = items.title;
   let word1 = titles.includes("Surfer");
   let word2 = titles.includes("Alien");
   let word3 = titles.includes("Benjamin");
   
   if (word1 != 0) return true;
   else if (word2 != 0) return true;
   else if (word3 != 0) return true;
   else return false;
})
.map((items) => items);

console.log(totalNumber);

//7.word in the title is duplicated

function find_duplicate_in_array(movies) {
   var object = {};
   var result = [];

   movies.forEach(function (item) {
     if(!object[item])
         object[item] = 0;
       object[item] += 1;
   })

   for (var prop in object) {
      if(object[prop] >= 2) {
          result.push(prop);
      }
   }

   return result;

}
console.log(find_duplicate_in_array(movies));

//9.verage rating 


//let count = movies.length;
//let sum = items.rating.reduce((previous, current) => current += previous);
// let avg = sum / count;

// const avgMovies = movies
//     .filter(items => items.rating.reduce((previous, current) => current += previous)).map(items => avg);


// console.log(avg);

