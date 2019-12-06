
console.log('Script loaded');
const products = getAvailableProducts();
console.log(products)

function renderProducts(products) {

  const elem = document.querySelector('section.products ul');
  for (var i = 0; i < products.length; i++) {
    
    let li = document.createElement('li');
    let ul2 = document.createElement('ul');
    
      // for (let k = 0; k < products[i].length-1; k++) {
      //     let li2 = document.createElement('li');
      //     li2.innerHTML = products[i][k];
      //     ul2.appendChild(li2);
          
      //   }
          
           let li2 = document.createElement('li');
           li2.innerHTML = products[i].name;
           ul2.appendChild(li2);
      
           let li3 = document.createElement('li');
           li3.innerHTML = products[i].price;
           ul2.appendChild(li3);
      
           let li4 = document.createElement('li');
           li4.innerHTML = products[i].rating;
           ul2.appendChild(li4);
          
          let li5 = document.createElement('li');
          let ul3 = document.createElement('ul');
          
          for (let j = 0; j < products[i].shipsTo.length; j++) {
            let li6 = document.createElement('li');
            li6.innerHTML = products[i].shipsTo[j];
            ul3.appendChild(li6);
          }
          li5.appendChild(ul3);
          ul2.appendChild(li5);

    li.appendChild(ul2);
    elem.appendChild(li);
  }
}
renderProducts(products);




