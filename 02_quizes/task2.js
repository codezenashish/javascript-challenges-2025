// function Q1() {
//   const newStr = "Hello World";
//   const secondStr = "javascript";

//   let reversingStr = newStr.split("").reverse().join("");
//   let secondReversingStr = secondStr.split("").reverse().join("");
//   console.log(reversingStr);
//   console.log(secondReversingStr);
// }
// Q1();

// const word = "hello world";
// const vowels = "aeiou";
// let count = 0;
// let strCount = "";
// let x = [];

// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//     count++;
//     strCount += word[i];
//     x.push(i);
//   }
// }
// console.log(x);
// console.log(count, strCount);

function Q3() {
  let aNumbers = [1, 5, 3, 6, 8, 2];
  let maxNumber = Math.max.apply(null, aNumbers);
  // console.log(maxNumber)
}
Q3();

function Q4() {
  // let arry = [1, 2, 3, 4, 5];
  let arry = [10, -5, 3];
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    console.log(i);
    sum += arry[i];
  }
  console.log(sum);
}

Q4();

function Q5() {
  function even(isEvan) {
    if (isEvan % 2 === 0) {
      console.log(`this number is even ${isEvan}`);
    } else {
      console.log(`this number is not even ${isEvan}`);
    }
    return;
  }
  console.log(even(2));
}

Q5();

function Q6() {
  let removeDuplicat = [1, 2, 2, 3, 4, 5,'a','b','a'];
  let chakeDuplicat =  removeDuplicat.filter((item,index)=>{
    return removeDuplicat.indexOf(item) === index
  })

  console.log(chakeDuplicat)

}

Q6()


