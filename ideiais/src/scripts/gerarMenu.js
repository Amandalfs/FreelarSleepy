const fs = require('fs')
window.addEventListener('load', (e)=>{
    fs.readFile('../filmes', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
})



