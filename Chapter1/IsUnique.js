//Implement an algorithm to determine if a string has all unique characrters. What if you cannot use additional data structures

// using another data structure
const unique = str => {
  let newObj = {};// creating a new object and storing the char as key
  for (let char of str) {
    if (!newObj[char]) {//if key already present it is not unique
      newObj[char] = 1;
    } else {
      return false;
    }
    return true;
  }
}
console.log(unique('dabcdde'))
  //
  // without using another data structure
  const unique1 = str1 => {
    if (str1.length > 128) return false; //128 is the number of ASCII characters
    let str2 = str1.split('').sort();
    //console.log(str1)
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] === str2[i + 1]) return false;
    }
    return true;
  };
  console.log(unique1('dfzerwhobnyq'))

