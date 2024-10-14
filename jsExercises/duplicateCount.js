const duplicateCount = text => {
    const lowerText = text.toLowerCase();
    const charCount = {};
  
    for (let char of lowerText) {
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    let duplicateCount = 0;
    for (let count in charCount) {
      if (charCount[count] > 1) {
        duplicateCount++;
      }
    }
  
    return duplicateCount;
  };
  
  console.log(duplicateCount('')); // 0
  console.log(duplicateCount('abcde')); // 0
  console.log(duplicateCount('abA11')); // 2
  console.log(duplicateCount('aabbcde')); // 2
  console.log(duplicateCount('aabBcde')); // 2
  console.log(duplicateCount('Indivisibility')); // 1
  console.log(duplicateCount('Indivisibilities')); // 2