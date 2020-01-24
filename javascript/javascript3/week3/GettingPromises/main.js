//const api = 'https://reqres.in/api/users';
const dataBenna100 = fetch(
   'https://api.github.com/search/repositories?q=user:benna100'
);
const dataBenhmaid = fetch(
   'https://api.github.com/search/repositories?q=user:benhmaid'
);

// async function getApi()
// {
//    const response = await Promise.all([dataBenna100, dataBenhmaid]);
//    const json = await response.json();
//     console.log(json);
// }
// getApi();

Promise.all([dataBenna100, dataBenhmaid])
   .then((res) => {
      res.forEach((result) => {
         process(result.json());         
      });
   })
   .catch((err) => {});
let process = (prom) => {
   prom.then((data) => {
      console.log(data);
      
      for (let i = 0; i < data.items.length; i++) {

         console.log(data.items[i].owner.url);
         console.log(data.items[i].owner.login); 
      
         let ul = document.getElementById('list');
         let li = document.createElement('li');
        
          li.innerHTML = `${ data.items[i].owner.login }
          -> Full name: ${data.items[i].full_name } - url: ${ data.items[i].owner.url }`;         
         ul.appendChild(li);
      }
   });
};
