const getMiddle = str => {
    const count = str.length;
    const middle = Math.floor(count / 2);
    if  (count % 2 === 0) {
        return str.slice(middle - 1, middle +  1);
    }
    else{
        return str.slice(middle, middle + 1);
    }

  };
  
  console.log(getMiddle('test')); // 'es'
  console.log(getMiddle('testing')); // 't'
  console.log(getMiddle('middle')); // 'dd'
  console.log(getMiddle('A')); // 'A'