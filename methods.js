////1. .FIND() Returns the value of the first element in an array that pass a test

const randomNumbers = [10, 4, 5, 10]

const currentNumber = randomNumbers.find((item) => item > 4)

console.log(currentNumber)


////2. .concat() merges two or more arrays and returns a new array

const array1 = [1, 5, 15]
const array2 = [5, 8, 32]
const array3 = [5, 2]

// Merging array1 and array2 into a new array

const mergedArray = array1.concat(array2, array3)

console.log(mergedArray)

////3. .filter() creates a new array with elements that pass the test

const numbers = [1, 2, 5, 12, 12, 135, 358, 540, 54061]
// Filtering only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0)

console.log(evenNumbers)


////4. .findIndex() / findLastIndex() Returns the index of the first / last element in an array that pass a test

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]
// Find the index of the user with name "Bob"
const userIndex = users.findIndex((users) => users.name === 'Bob')

console.log(userIndex)


////5. .forEach() Calls a function for each array element

const numbersss = [1, 2, 3, 4, 5];

// Loop through each number and log it
numbersss.forEach((num) => { console.log(num) });


////6. .includes() – Check if an array contains a specific value
//The .includes() method checks whether an array contains a specific element and returns true or false.

const fruits = ["apple", "banana", "orange"];

// Check if "banana" is in the array
console.log(fruits.includes("banana")); // Output: true

// Check if "grape" is in the array
console.log(fruits.includes("grape")); // Output: false

////7. .indexOf() – Find the index of an element in an array
// The .indexOf() method returns the index of the first occurrence of a specified element in an array. 
// If the element is not found, it returns -1.

const numberssss = [10, 20, 30, 40, 50, 20];

// Find the index of the first occurrence of 20
const index = numberssss.indexOf(20);

console.log(index); // Output: 1 (because 20 appears first at index 1)


////8. .join() – Convert an array into a string
//The .join() method joins all elements of an array into a single string, 
// separated by a specified separator.

const words = ["Hello", "world", "JavaScript"];

// Join the words with a space
const sentence = words.join(" ");
const sentencee = words.join("-");
const sentenceee = words.join("");

console.log(sentence); // Output: "Hello world JavaScript"
console.log(sentencee);
console.log(sentenceee);


////9. .length – Get the number of elements in an array
// The .length property returns the number of elements in an array.
const num = [10, 20, 30, 40, 50];

// Get the length of the array
console.log(num.length); // Output: 5

////10. .map() – Create a new array by transforming each element
// The .map() method creates a new array by applying a function to each element of the original array.

const nums = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubledNumbers = nums.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//Example: Extracting values from an array of objects
const userss = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Extract only names
const names = userss.map((user) => user.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]


////11. .pop() – Remove the last element from an array
// The .pop() method removes and returns the last element from an array. 
// It modifies the original array.

const usersmap = [
    { name: 'Angela' },
    { name: 'Lita' },
    { name: 'Wojtek' }
]

const newusersmap = usersmap.pop()

console.log(usersmap)

////12. .push() method in JavaScript is used to add one or more elements to the end of an array 
// and returns the new length of the array.

const pushmethod = [1, 2, 3]
let newpushmethod = pushmethod.push(4, 5, 6)

console.log(pushmethod)
console.log(newpushmethod)


////13. .reduce() method in JavaScript is used to reduce an array to a single value 
// by executing a callback function on each element.

let reduceNumbers = [1, 2, 3, 4, 5, 6]

//summing an array
let reduceNumberSum = reduceNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(reduceNumberSum)


////14. .slice() method in JavaScript is used to extract a portion of an array or string 
// without modifying the original array.

let sNumbers = [10, 20, 30, 40, 50]

let sliceNumbers = sNumbers.slice(1, 4)

console.log(sliceNumbers)
console.log(sNumbers)


////15. .sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array.

//sorting an Array of Objects

let sUsers = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
];

//sort by the age, ascending

let sortUsers = sUsers.sort((a, b) => a.age - b.age)

console.log(sortUsers)


////16. .splice() method in JavaScript is used to add, remove, or replace elements in an array. 
// It modifies the original array and returns an array of the removed elements.

// Replacing elements

let sFruits = ['apple', 'banana', 'cherry']

let spliceFuits = sFruits.splice(1, 1, 'plum')

console.log(spliceFuits)
console.log(sFruits)

////17. .toString() method in JavaScript is used to convert an array, 
// object, or other data types into a string.

let sNum = 123

console.log(typeof (sNum.toString()))
console.log((150 - 80).toString())

