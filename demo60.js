// *****
// *   *
// *   *
// *   *
///*****


let rows = 5;
let pattern = "";

for (n = 1; n <= rows; n++) {
    for (num = 1; num <= 5; num++) {
        if (n  == 1 || n == rows)
            pattern += "*";
        else {
            if (num == 1 || num == 5) {
                pattern += "*";
            } else {
                pattern += " ";
            }
        }
    }
    pattern += "\n";
}
console.log(pattern);
