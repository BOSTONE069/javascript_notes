/* This code is checking if the value of the variable `num` is greater than 0. If it is, it will print
out a message saying that `num` is a positive number. If it is not greater than 0, it will print out
a message saying that `num` is a negative number. In this case, `num` is equal to 3, so the output
will be "3 is a positive number". */
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What day is today? ', (day) => {
  day = day.toLowerCase();

  switch (day) {
    case 'monday':
      console.log('Today is Monday');
      break;
    case 'tuesday':
      console.log('Today is Tuesday');
      break;
    case 'wednesday':
      console.log('Today is Wednesday');
      break;
    case 'thursday':
      console.log('Today is Thursday');
      break;
    case 'friday':
      console.log('Today is Friday');
      break;
    case 'saturday':
      console.log('Today is Saturday');
      break;
    case 'sunday':
      console.log('Today is Sunday');
      break;
    default:
      console.log('It is not a week day.');
  }

  rl.close();
});

