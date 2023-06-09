for(let i = 0; i <= 5; i++) {
    console.log(i)
}
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

/* This code is creating an array of countries and then creating a new empty array called `newArr`. It
then loops through each element in the `countries` array and converts each country name to uppercase
using the `toUpperCase()` method and pushes the uppercase version of the country name to the
`newArr` array. Finally, it logs the `newArr` array to the console. */
const countries = ['Finland', 'France', 'Sweden', 'Denmark', 'Canada', 'Norway', 'United States', 'Iceland'];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15

//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5