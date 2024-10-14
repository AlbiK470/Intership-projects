const count = string => {
    const charCount =  {};
    for  (let char of string) {
        if (charCount[char]){
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;

  };
  
  console.log(count('')); // {}
  console.log(count('aba')); // { a: 2, b: 1 }