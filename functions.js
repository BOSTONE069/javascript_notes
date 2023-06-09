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