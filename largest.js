function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}
const ages = [12, 22, 45, 70, 11];
const oldest = largestElement(ages);
console.log('Oldest Man=', oldest);


function largestMan(ages) {
    let largest = 0;
    for (let i = 0; i < ages.length; i++) {
        const element = ages[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 22, 32, 52, 80];
const oldest = largestMan(ages);
console.log('Oldest Man=', oldest);