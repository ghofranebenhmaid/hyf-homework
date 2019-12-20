console.log('Script loaded');
const products = getAvailableProducts();
console.log(products);
const productsUl = document.querySelector('section.products ul');

function renderProducts(products) {
   productsUl.innerHTML = '';
   for (let i = 0; i < products.length; i++) {
      let li = document.createElement('li');
      productsUl.appendChild(li);

      let ul = document.createElement('ul');
      li.appendChild(ul);

      let li1 = document.createElement('li');
      li1.innerHTML = products[i].name;
      ul.append(li1);

      let li2 = document.createElement('li');
      li2.innerHTML = products[i].price;
      ul.append(li2);

      let li3 = document.createElement('li');
      li3.innerHTML = products[i].rating;
      ul.append(li3);

      let li4 = document.createElement('li');
      ul.append(li4);

      let btn = document.createElement('button');
      btn.innerText = 'Add to cart';
      btn.style.color = '#fff';
      btn.style.backgroundColor = '#000';
      btn.style.height = '35px';
      btn.style.border = 'none';

      btn.addEventListener('click', function() {
         addProduct(products[i]);
      });
      ul.append(btn);

      let shippingUl = document.createElement('ul');
      li4.appendChild(shippingUl);

      for (let j = 0; j < products[i].shipsTo.length; j++) {
         const ship = products[i].shipsTo[j];
         let shippingLi = document.createElement('li');
         shippingLi.innerHTML = ship;
         shippingUl.appendChild(shippingLi);
      }
   }
}
renderProducts(products);

//Searching for products

const input = document.querySelector('.search input');
input.addEventListener('input', () => {
   debugger;
   //let searchValue = input.value;
   let searching = products.filter(items =>
      items.name.toUpperCase().includes(input.value.toUpperCase())
   );
   renderProducts(searching);
});

//Showing products that ships to country

const countries = document.querySelector('.country select');
countries.addEventListener('change', () => {
   let country = countries.value;
   let selectCountry = products.filter(items => {
   let shipping = items.shipsTo.map(items => items.toLowerCase());
      return shipping.includes(country);
   });
   renderProducts(selectCountry);
});
//Sort the products

let selectSrt = document.querySelector('.sort select');
selectSrt.addEventListener('change', selectSortCountry);

function selectSortCountry() {
   let matched;

   if (selectSrt.value === 'cheap') {
      matched = products.sort((a, b) => a.price - b.price);
      renderProducts(matched);
   } else if (selectSrt.value === 'name') {
      matched = products.sort((a, b) => (a.name > b.name ? 1 : -1));
      renderProducts(matched);
   } else if (selectSrt.value === 'expensive') {
      matched = products.sort((a, b) => b.price - a.price);
      renderProducts(matched);
   }
}
// Shopping cart

const cart = document.querySelector('.products ul btn');
let ul = document.querySelector('.cart ul');

function addProduct(product) {
   let li = document.createElement('li');
   ul.appendChild(li);

   li.innerHTML = `<div>${product.name}</div>
   <div>${product.price}</div>`;
}
