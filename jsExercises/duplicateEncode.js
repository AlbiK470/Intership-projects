const duplicateEncode = word => {
    const lowerWord = word.toLowerCase();
    const charCount = [];

    for (let char of lowerWord) {
        if (charCount[char]) {
            charCount[char]++;
          } else {
            charCount[char] = 1;
          }
        }

      let result = '';
      for (let char of lowerWord){
        if (charCount[char] === 1){
            result += '(';
        }
        else{
            result += ')';
        }
      }

      return result;
  };
  
  console.log(duplicateEncode('din')); // '((('
  console.log(duplicateEncode('(( @')); // '))(('
  console.log(duplicateEncode('recede')); // '()()()'
  console.log(duplicateEncode('Success')); // ')())())'