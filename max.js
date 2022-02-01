const business = 250;
const police = 650;
const army = 450;
var max = Math.max(business, police, army);
console.log(max);


function findLargest(number1, number2, number3) {
    if (number1 > number2 && number2 > number3) {
        return number1;
    }
    else if (number2 > number1 && number2 > number3) {
        return number2;
    }
    else {
        return number3;
    }
}
const number1 = 450;
const number2 = 350;
const number3 = 550;
const largest = findLargest(number1, number2,number3);
console.log('Largest Number:', largest);
