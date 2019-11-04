// 1- A future age calculator

const year0fBirth = 1980;
const yearFuture = 2050;
const age = yearFuture - year0fBirth;

console.log("You will be " + age + " years old in " + yearFuture);

// 2- A dog age calculator

const dogYearOfBirth = 2001;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}

// 3- Housey pricey - A house price estimator

const houseWide = 5;
const houseDeep = 11;
const houseHigh = 8;
const gardenSizeM2 = 70;
const volumeInMeters = houseWide * houseDeep * houseHigh;

const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeM2 * 300;
console.log(housePrice);

// 4- Ez Namey (Startup name generator) 

const firstWords = ["Funny", "Easy", "Awesome", "Intelligent", "Big", "Great", "Sustainable", "Strong", "Useful", "Powerful"];
const secondWords = ["Society", "Performance", "Advertising", "Construction", "Knowledge", "Message", "Relaxation", "Marriage", "Contribution", "Opportunity"];
// const randomNumber = Math.floor(Math.random() * 10) + 0;

// const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)];

console.log(startupName);