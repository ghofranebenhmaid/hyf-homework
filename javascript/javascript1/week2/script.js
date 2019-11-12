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
