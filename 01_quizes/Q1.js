function Q1() {
  function reverseString(str) {
    return str.split("").reverse();
  }

  console.log(reverseString("hello").join(""));
  console.log(reverseString("javascript").join(""));

  function loopQ() {
    let newStr = "Hello World";

    let strax = "";
    for (let i = 0; i < newStr.length; i++) {
      strax = newStr[i] + strax;
    }
    console.log(strax);
  }

  loopQ();
}

Q1(); // complete

function Q2() {
  function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
  }

  console.log(isPalindrome("madam"));
  console.log(isPalindrome("hello"));
}

Q2(); // complete

function Q3() {
  const findMax = [12, 13, 57, 45, 6, 78];
  const newArray = [10, 20, 5];
  let newMax = Math.max(...newArray);
  let max = Math.max(...findMax);
  console.log(max);
  console.log(newMax);
}

Q3(); //complete

function Q4() {
  const removeDuplicates1 = [1, 2, 2, 3, 4, 4, 5];
  const removeDuplicates2 = ["a", "b", "a", "c"];

  let uniqueValue1 = [...new Set(removeDuplicates1)];
  let uniqueValue2 = [...new Set(removeDuplicates2)];

  console.log(uniqueValue1);
  console.log(uniqueValue2);
}

Q4(); // complete

function Q5() {
  function sumEvenNumbers(n) {
    const lastEvan = n % 2 === 0 ? n : n - 1;
    const count = Math.floor(lastEvan / 2);
    return count * (count + 1);
  }
  console.log(sumEvenNumbers(10));
  console.log(sumEvenNumbers(5));
}

Q5(); //complete

function Q6() {
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(5));
}

Q6(); // complete

function Q7() {
  const fizBuz = [1, 2, 3, "hello", 5, "world", 7];
  const value = fizBuz.map((item, index) => {
    if (isNaN(item)) {
      return index + 1;
    }
    return item;
  });
  console.log(value);
}
Q7(); // complete

function Q8() {
  const vowels = ["a", "e", "i", "o", "u"];
  const myWords = [
    "apple",
    "banana",
    "sky",
    "rhythm",
    "elephant",
    "xyz",
    "Orange",
  ];
  const myArray = [];

  for (const word of myWords) {
    const lowCase = word.toLowerCase();
    const hasVowels = vowels.some((vowels) => lowCase.includes(vowels));
    if (hasVowels) {
      myArray.push(word);
    }
  }

  console.log(myArray);
}

Q8();

function Q9() {
  function userAge(userObject) {
    const currentDate = new Date().getFullYear();
    const birthYear = userObject.birthYear;

    const age = currentDate - birthYear;
    return age;
  }

  const user = {
    name: "Ashish",
    birthYear: 1990,
  };

  const user1 = userAge(user);
  console.log(user1);
}

Q9();

function Q10() {}
