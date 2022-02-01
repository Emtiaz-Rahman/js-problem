const number = [44, 45, 12, 12, 5, 13, 57];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element);
}



function arryTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;

    }
    return sum;

}
const total = arryTotal([12, 22, 32]);
console.log('Arry Total', total);

const number = [12, 22, 32, 42];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
}
console.log(sum);


function arryTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const total = arryTotal([12, 22, 32, 42]);
console.log('Arry Total=', total);