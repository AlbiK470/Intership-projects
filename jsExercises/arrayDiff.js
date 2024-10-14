const arrayDiff = (a, b) => {
    const result = [];

    for (let i = 0; i < a.length; i++){
        if  (!b.includes(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
  };
  
  console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
  console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
  console.log(arrayDiff([3, 4], [3])); // [4]
  console.log(arrayDiff([], [4, 5])); // []