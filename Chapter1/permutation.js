//given 2 strings, write a method to decide if one is a permutation of the other

const permutation = (str1, str2) => {
  //the strings need to be of equal length
  if (str1.length === str2.length) {
    //spliting and sorting them makes it easier
    str1 = str1.split('').sort();
    //console.log('str1:', str1)
    str2 = str2.split('').sort();
    //console.log('str2:',str2)
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
console.log(permutation('abcde', 'bdca'));

const checkPermutation = (str1, str2) => {
  if (str1.length === str2.length) {
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    if (str1 === str2) return true
  } else {
    return false;
  }
}
console.log(checkPermutation('abcde', 'bdca'))
