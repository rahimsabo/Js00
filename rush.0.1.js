const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frenchNumbers = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];

let frenchWords = [];

for (let i = 0; i < numbers.length; i++) {
  frenchWords.push(frenchNumbers[i]);
}

console.log(frenchWords)