const palinPerm = str => {
  str = str.replace(/\s/g, '').toLowerCase();
  let newobj = {};
  let count = 0;
  for (let char of str) {
    if (!newobj[char]) {
      newobj[char] = 1;
    } else {
      newobj[char]++;
    }
  }
  console.log('obj:', newobj);
  for (let key in newobj) {
    if (newobj[key] % 2 !== 0) count++;
  }
  if (count > 1) return false;
  else return true;
};

console.log(palinPerm('A car, a man, a maraca'));
console.log(palinPerm('Veni vedi vici'));
console.log(palinPerm('abcf bacz'));
