// reverse number 

function reversenumber(num) {

    return parseFloat(String(num).split('').reverse().join(''));
    }

const originalNum = 12345;
const reversed = reversenumber(originalNum);
console.log(`The reversed number of ${originalNum} is : ${reversed}`);

