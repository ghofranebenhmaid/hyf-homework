
//Spirit animal name generator

const spiritAnimal = ['spiritAnimal_1','spiritAnimal_2','spiritAnimal_3','spiritAnimal_4','spiritAnimal_5','spiritAnimal_6','spiritAnimal_7']


function myFunction() {
  
  let animal = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
     let x = document.getElementById ('myText').value;
     if (x === '') {
         document.getElementById("tag").innerHTML = `Please insert a name!`;
         document.getElementById("tag").style.color = "red";
        
     } else {
         document.getElementById("tag").innerHTML = `${x} - The ${animal}`;
         document.getElementById("tag").style.color = "#fff";
     }
 }

  const btn = document.getElementById ('btn');
 const input1 = document.getElementById ('myText');

 function chooseInput () {

  let options = document.getElementsByName ('optionsInput');
  if (options[0].checked) { 
    btn.addEventListener ('click', myFunction);
    input1.removeEventListener ('mouseover', myFunction);
    input1.oninput = '';
  } else if (options[1].checked) {
    input1.addEventListener ('mouseover', myFunction);
    btn.removeEventListener ('click', myFunction);
    input1.oninput = '';
  } else if (options[2].checked) {
    input1.oninput = function () {
      myFunction ();
    };
    btn.removeEventListener ('click', myFunction);
    input1.removeEventListener ('mouseover', myFunction);
  }
}
  
  //   function onInput() {
  //      let x = document.getElementById("myText").value;
  //      document.getElementById("tag").innerHTML = `${x} - The ${animal}`;
  //   }


  //   function mouseOver() {
  //       let x = document.getElementById("myText").value;
  //       if (x == '') {
  //           document.getElementById("tag").textContent = `Please insert a name!`;
  //           document.getElementById("tag").style.color = "red";
  //       }else{
  //           document.getElementById("tag").textContent = `${x} - The ${animal}`;
  //           document.getElementById("tag").style.color = "#fff";
  //   }
  // }
  
  //   function mouseOut() {
  //     document.getElementById("tag").textContent = "";
  // }

//   function threeInOne(){
// if (document.getelementbyid("onInput").checked = true) {
//   onInput();
// }else if (document.getelementbyid("mouseOverOut").checked = true) {
//   mouseOver();
//   mouseOut();
// }else if (document.getelementbyid("onClick").checked = true) {
//   myFunction();
// }
// }


    
 
