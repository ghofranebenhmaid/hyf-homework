document.querySelector('.btn1').addEventListener('click', translateOneByOne);
document.querySelector('.btn2').addEventListener('click', translateAllAtOnce);

function translateOneByOne() {
   moveElement(document.querySelector('li:nth-child(1)'), {
      x: 20,
      y: 300
   }).then(() => {
      moveElement(document.querySelector('li:nth-child(2)'), {
         x: 400,
         y: 300
      }).then(() =>
         moveElement(document.querySelector('li:nth-child(3)'), {
            x: 400,
            y: 20
         })
      );
   });
}

function translateAllAtOnce() {

   Promise.all([
    moveElement(document.querySelector('li:nth-child(1)'), {
        x: 20,
        y: 300
    }),
    moveElement(document.querySelector('li:nth-child(2)'), {
        x: 400,
        y: 300
    }),
    moveElement(document.querySelector('li:nth-child(3)'), {
        x: 400,
        y: 20
     })
   ]).then(() => {
      console.log('All elements has been moved');
   });
}

function refreshPage() {
   window.location.reload();
}
