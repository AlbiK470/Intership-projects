const highAndLow = numbers => {
    let numArray = numbers.split(' ').map(Number);
    let highest = numArray[0];
    let lowest = numArray[0];

    for(let i=1; i<numArray.length; i++){
        
        if(numArray[i] > highest){
            highest = numArray[i];
        }
        if(numArray[i] < lowest){
            lowest = numArray[i];
        }
    }

    return `${highest} ${lowest}`;
};
  
  console.log(highAndLow('1 2 3 4 5')); // '5 1'
  console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
  console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
  console.log(highAndLow('0 -214 542')); // '542 -214'