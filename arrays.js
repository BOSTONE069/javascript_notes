const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

/*The code above creates three arrays: firstList, secondList, and thirdList. The first and second arrays contain three numbers each. The third array is created by concatenating the first and second arrays using the concat() method. The resulting third array contains all six numbers from the first two arrays. The third array is then logged to the console. */
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)


const numbersTwo = [1,2,3,4,5,6]
numbersTwo.pop()
console.log(numbersTwo)