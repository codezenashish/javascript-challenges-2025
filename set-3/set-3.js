// ==============================
// 🧠 Problem 1: Reverse a String
// ==============================

function countVowelsInString() {
  let inputString = "An elephant is outside";
  let vowelCharacters = "aeiou";
  let vowelCount = 0;
  let vowelsFound = "";
  let vowelIndices = [];

  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);

    if (vowelCharacters.includes(inputString[i])) {
      vowelCount++;
      vowelsFound += inputString[i];
      vowelIndices.push(i);
    }
  }
  console.log(`Total vowels = ${vowelCount}`);
  console.log(`Vowels found = ${vowelsFound}`);
  console.log(`Indices of vowels = ${vowelIndices}`);
}
countVowelsInString();

//  3

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

console.log(truncate("hello ji keshe ho ", 8));

// question number 5

function reverseWord(str) {
  return str.split(" ").reverse().join();
}

console.log(reverseWord("hello ashish"));
