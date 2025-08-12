// Write C program to print even or odd numbers using function.

function checkevenorodd(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        console.log("Enter Provide a valid integer");
        return 0;
    }

if  (num % 2 === 0) {
    console.log(`${num} is an Even Number`);
} else {
    console.log(`${num} is an odd Number`);
}

    checkevenorodd(4);
    checkevenorodd(5);
    checkevenorodd(9);
}







