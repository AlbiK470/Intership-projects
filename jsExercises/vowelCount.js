const getCount = str => {
    let count = 0;
    const vowels = 'aeiouy';
        for (let char of str) {
            if (vowels.includes(char.toLowerCase())) {
         count++;
    }
  }
        return count;
  };
  
  console.log(getCount('my pyx')); // 0
  console.log(getCount('pear tree')); // 4
  console.log(getCount('abracadabra')); // 5
  console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13