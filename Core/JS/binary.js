const toBinary = (num) => {
  if (num === 0) {
    return "0";
  } else if (num === 1) {
    return "1";
  }
  let a = Math.floor(Math.log2(num));
  let arr = [];
  if (a !== 0) {
    for (let i = 0; i <= a; i++) {
      arr.push(0);
    }
    arr[arr.length - a - 1] = 1;
    console.log(arr);
    num -= 2 ** a;
    if (num === 0) {
      return arr.join("");
    }
  } else if (a === 0) {
    return "0";
  }
  while (num !== 0) {
    let b = Math.floor(Math.log2(num));
    if (b !== 0) {
      arr[arr.length - b - 1] = 1;
      num -= 2 ** b;
      if (num === 0) {
        return arr.join("");
      }
    } else if (b === 0) {
      arr[arr.length - b - 1] = 0;
      num--;
    }
  }
  arr[arr.length - 1] = 1;
  return arr.join("");
};
