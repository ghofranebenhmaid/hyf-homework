// 1- A future age calculator

let year0fBirth = 1980;
let yearFuture = 2050;
let age = yearFuture - year0fBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// 2- A dog age calculator

let dogYearOfBirth = 2001;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear*7 + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
};

// 3- Housey pricey - A house price estimator
// Peter's house price

let houseWide = 8;
let houseDeep = 10;
let houseHigh = 10;
let gardenSizeM2 = 100;
let volumeInMeters = houseWide * houseDeep * houseHigh;
let cost = 2500000;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeM2 * 300;
if( housePrice < cost ){
console.log("Peter payed more than he should have.");
}else if (housePrice === cost){
console.log("The price Peter payed match with the real value of the house.");
}else{
console.log("Peter payed less than the house is worth.");
}
// Julia's house price

let houseWide = 5;
let houseDeep = 11;
let houseHigh = 8;
let gardenSizeM2 = 70;
let volumeInMeters = houseWide * houseDeep * houseHigh;
let cost = 1000000;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeM2 * 300;
if( housePrice < cost ){
console.log("Julia payed more than he should have.");
}else if (housePrice === cost){
console.log("The price Julia payed match with the real value of the house.");
}else{
console.log("Julia payed less than the house is worth.");
}

// 4- Ez Namey (Startup name generator) 

let firstWords = ["Funny", "Easy", "Awesome", "Intelligent", "Big", "Great", "Sustainable", "Strong", "Useful", "Powerful"];
let secondWords = ["Society", "Performance", "Advertising", "Construction", "Knowledge", "Message", "Relaxation", "Marriage", "Contribution", "Opportunity"];
// const randomNumber = Math.floor(Math.random() * 10) + 0;
// const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
let startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)];
console.log(startupName);
