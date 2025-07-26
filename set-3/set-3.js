// ==============================
// 🧠 Problem 1: Reverse a String
// ==============================



// ========================

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
