//write a method to replace all spaces in a string with '%20'

const URLify = str => {
  let regex = /\s/g;
  return str.replace(regex, '%20');
};
console.log(URLify('Mr John Smith'));

const URLIfy = str => {
  let resultStr = ''
  for (let char of str) {
    if (char === ' ') {
    resultStr += '%20'
    }
    else {
      resultStr += char
    }
  }
  return resultStr
}
console.log(URLIfy('Mr John Smith'))
