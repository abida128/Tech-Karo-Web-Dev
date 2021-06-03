const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


// using function

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// string 

let stringArray = ['Blue', 'Humpback', 'Beluga'];
 console.log(stringArray);
let numericStringArray = ['80', '9', '700'];

console.log(numericStringArray);
let numberArray = [40, 1, 5, 200];
console.log(numberArray);
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
console.log(mixedNumericArray);





let numberz = [6, 2,75, 8, 3];
numberz.sort((a, b) => a - b);
console.log(numberz);
