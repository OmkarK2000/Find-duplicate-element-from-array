const findDuplicateEle = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (uniqueArr.length === 0) {
          uniqueArr.push(arr[i]);
        }
        let count = 0;
        for (let k = 0; k < uniqueArr.length; k++) {
          if (arr[i] !== uniqueArr[k]) {
            count++;
          }
        }
        if (count === uniqueArr.length) {
          uniqueArr.push(arr[i]);
        }
      }
    }
  }
  return uniqueArr;
};

const a = findDuplicateEle([1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 4, 5, 4, 6, 6, 1,]);
console.log(a);
