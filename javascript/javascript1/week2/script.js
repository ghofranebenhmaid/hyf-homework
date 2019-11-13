// Flight booking fullname function

 function getFullname(firstname, surname){
     fullName = firstname +' '+ surname;
     console.log(fullName);
 }
getFullname('Zaineb', 'Ben ');
getFullname('Ghofrane', 'Ben ');

//Formal fullname

function getFullname(firstname, surname, useFormalName){
  if(firstname != '' && surname!= ''){
    if(useFormalName){
       return fullName = 'Lord '+ firstname +' '+ surname;
    }else{
       return fullName = firstname +' '+ surname;
    }
  }  else{
      console.log('Please type in both first name and sur name..');  
  }
}

fullName = getFullname('Zaineb', 'Ben ', false);
console.log(fullName);
fullName = getFullname('Ghofrane', 'Ben ', true);
console.log(fullName);
fullName = getFullname('Ghofrane', '');
console.log(fullName);

//Event application

function getEventWeekday(numDays){
var d = new Date();
var today = d.getDay();
 eventDay = today + numDays;

 for(var i=eventDay ; i>6;){
 eventDay = eventDay-7; 
 i = eventDay; 
 }

var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
return eventWeekDay = weekday[eventDay];
}
event = getEventWeekday(13);
console.log(event); 

//Weather wear
function temperatureWear(temperature){
    if ( 0 < temperature && temperature <= 5) {
      return  console.log('jeans and a jacket'); 
        
    }else if ( -10 < temperature && temperature<= 0 ){
     return console.log('jeans and long coat');

    }else if ( 5 < temperature && temperature<= 15){
      return console.log('jeans and a sweater');

    }else if ( 15 < temperature && temperature<= 25){
      return console.log('shorts and a t-shirt');
    } 
}
temperatureWear(19);
temperatureWear(5);
temperatureWear(-4);
temperatureWear(-11);

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName != ''){
    if(class07Students.includes(studentName)== false){
    if(class07Students.length < 6){
      class07Students.push(studentName);
        return class07Students ;
    }else if (class07Students.length >= 6) {
      if(studentName == 'Queen'){
        class07Students.push(studentName);
         return class12Students ;
      }else {
        return   "Cannot add more students to class 07";
      }
    }
  }else if(class07Students.includes(studentName)== true){
    return  "Student "+ studentName + " is already in the class";
  }  
}else if(studentName == ''){
   return "You cannot add an empty string to a class";
}
}  

function getNumberOfStudents() {
return "The number of students in class 07 is "+ class07Students.length ;
}

console.log(addStudentToClass('ghofrane'));
console.log(addStudentToClass('zaineb'));
console.log(addStudentToClass(''));
console.log(addStudentToClass('Ithmen'));
console.log(addStudentToClass('babab'));
console.log(addStudentToClass('jajaj'));
console.log(addStudentToClass('yayay'));
console.log(addStudentToClass('zaineb'));
console.log(addStudentToClass('tototo'));
console.log(addStudentToClass('Queen'));
console.log(addStudentToClass('kokok'));

n =getNumberOfStudents();
console.log(n);

//Candy helper 

const boughtCandyPrices = [];

function addCandy(candyType, weight){
  let candyTypeArray = ['sweet', 'chocolate', 'toffee' , 'chewing-gum'];
  let pricePerGramArray = [0.5,0.7,1.1,0.03];
  let index = candyTypeArray.indexOf(candyType)
  let pricePerGram = pricePerGramArray[index];
  price = pricePerGram * weight;
  boughtCandyPrices.push(price);
  return boughtCandyPrices;
}

var amountToSpend = Math.random() * 100;
var amountToSpend = 16;
function canBuyMoreCandy(amountToSpend){

var totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    var totalPrice = totalPrice + boughtCandyPrices[i];
  }
  if (totalPrice < amountToSpend ){
    return "You can buy more, so please do!";
  }else{
    return "Enough candy for you!";
  }
}

console.log(addCandy('sweet', 20));
console.log( canBuyMoreCandy(amountToSpend));
console.log(addCandy('chocolate', 30));
console.log( canBuyMoreCandy(amountToSpend));
console.log(addCandy('toffee', 3));
console.log( canBuyMoreCandy(amountToSpend));
console.log(addCandy('chewing-gum', 7));
console.log( canBuyMoreCandy(amountToSpend));
