// 54321
// 4321
// 321
// 21
// 1

let rows = 5;
let pattern = " ";

// Outer loop
for (let n = 1; n <= rows; n++) {
    for (let num = 6 - 1; num >= 1; num--) {
        pattern += num;
    }
    pattern += "\n";
}
console.log(pattern);

