//      * 
//    * * * 
   //* * * * * 
 //* * * * * * * 
//* * * * * * * * * 
// * * * * * * * 
  // * * * * * 
    // * * * 
    //   * 

let prompt = require("prompt-sync") ();

let n = parseInt(prompt("Enter is 5 Patterns of numbers"));

// upper loop
for (let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(2 * i - 1);

    console.log(row);
}


// Lower Loop
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(2 * i - 1);

    console.log(row);
}