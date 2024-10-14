const firstNonRepeatingLetter = str => {
    const frequency = {};
    const strLower = str.toLowerCase();
    
    for (let char of strLower) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
    for (let char of str) {
      if (frequency[char.toLowerCase()] === 1) {
        return char;
      }
    }
    
    return '';
  };
  
  console.log(firstNonRepeatingLetter('a')); // 'a'
  console.log(firstNonRepeatingLetter('stress')); // 't'
  console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
  console.log(firstNonRepeatingLetter('abba')); // ''
  console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','