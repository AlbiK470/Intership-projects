const persistence = num => {
    let count = 0;
    let n = num;

    while (n >= 10) {
        count++;
        n=multiplyDigits(n);
    }
    return count;
};
    const multiplyDigits = num =>{
        let product = 1;
        while (num > 0){
            product *= num % 10;
            num = Math.floor(num / 10);
        }
        return product;
    };
  
  
  console.log(persistence(999)); // 4
  // because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2
  
  console.log(persistence(93)); // 3
  // because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit
  
  console.log(persistence(5)); // 0
  // because 5 is already a single-digit number