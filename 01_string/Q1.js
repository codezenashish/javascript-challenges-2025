function Q1() {
  function reverseString(str) {
    return str.split("").reverse();
  }

  console.log(reverseString("hello").join(""));
  console.log(reverseString("javascript").join(""));
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


function Q4(){
    const removeDuplicates1 = [1, 2, 2, 3, 4, 4, 5]
    const removeDuplicates2 = ["a", "b", "a", "c"]
    
    
}

Q4()