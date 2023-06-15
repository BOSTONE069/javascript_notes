function square() {
    let num = 2
    let sq = Math.sqrt(num)
    console.log(sq)
}
square()

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(20))


function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum)
}
sumTwoNumbers(10, 30)

/**
 * The function takes an array of strings and returns a new array with all elements converted to
 * uppercase.
 * @returns The function `changeToUpperCase` returns a new array where all the elements of the input
 * array `arr` are converted to uppercase letters.
 */
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]