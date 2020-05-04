function myFunction() {
   return new Promise((resolve) => {
      fetch('https://yesno.wtf/api')
         .then((res) => res.json())
         .then((result) => {
            return result;
         })
         .then((result) => {
            setTimeout(() => {
               resolve(result);
            }, 4000);
         });
   });
}

myFunction().then(result => console.log(result));