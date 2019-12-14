console.log('Yes, I can !');

//Doubling of number
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] % 2 !== 0) {
      newNumbers[i] = numbers[i] * 2;
   }
}

console.log('The doubled numbers are', newNumbers);

const result = numbers
   .filter((items) => {
      if (items % 2 !== 0) return true;
      else return false;
   })
   .map((items) => {
      res = items * 2;
      return res;
   });
console.log(result);

//Working with movies
