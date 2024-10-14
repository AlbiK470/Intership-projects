const disemvowel = str => {
    let count = 0;
    const vowels = 'aeiouy';
    var sentence = '';
        for (let char of str) {
            if (!vowels.includes(char.toLowerCase())) {
                sentence += char;
    }
  }
        return sentence;
  };
  
  console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'