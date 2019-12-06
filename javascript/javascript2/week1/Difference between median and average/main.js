//Difference between median and average

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average (housePrices) {
  let sum = 0;
  for (let i = 0; i < housePrices.length; i++){
      sum += housePrices[i];
  }
  avg = sum / housePrices.length;
  return avg;
}
console.log(average(housePrices));

function median(housePrices) {

  housePrices.sort((a, b) => a - b);
  let lowMiddle = Math.floor((housePrices.length - 1) / 2);
  let highMiddle = Math.ceil((housePrices.length - 1) / 2);
  let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
  return median;
}

console.log(median(housePrices));

//Show on webpage

//Create headline
const headLine = document.createElement('h1');
headLine.innerHTML = 'Average and median';
document.body.appendChild (headLine);

//Create list

const ul = document.createElement ('ul');
ul.innerHTML = 'House Prices';
document.body.appendChild(ul);

//Display the hous price in the list
for (var i = 0; i < housePrices.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = housePrices[i];
  ul.appendChild(li);
}

//Show median and average

const averageList = document.createElement('h2');
averageList.innerHTML = `The average is: ${average(housePrices)}`;
document.body.appendChild (averageList);

const medianList = document.createElement('h2');
medianList.innerHTML = `The median is: ${median(housePrices)}`;
document.body.appendChild (medianList);