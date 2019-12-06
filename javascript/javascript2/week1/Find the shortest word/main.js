//Find the shortest word.
const danishWords = ['bil', 'plante', 'kaffe', 'bog','Æg','Ko' , 'planetarium'];
function shortestWord(danishWords) {
  const arr=[];
   for (let i = 0; i < danishWords.length; i++) {
    arr.push(danishWords[i].length);
     }
     let num = Math.min(...arr);
     let index = arr.indexOf(num);
     let shortWord = danishWords[index];

     let x = document.createElement("p");     
     let word = document.createTextNode(shortWord);
     x.appendChild(word);
     y = document.body.appendChild(x);
     y.style.fontSize = "800px";
     y.style.color = "red";
     y.style.margin = "auto";

  return shortWord;
}
console.log(shortestWord(danishWords));

