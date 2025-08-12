// 11111 11111 11111 11111 11111

let prompt = require('prompt-sync') ();

for (let i = 0; i < 5; i++) { 
  let row = ""; 
  for (let j = 0; j < 5; j++) { 
     row += "1";
  }
  console.log(row); 
}