const maximumWealth = accounts => {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce ((a,b) =>  a + b, 0);
        if(wealth > maxWealth){
            maxWealth = wealth;
        }
    }
    return maxWealth;
  };
  
  console.log(
    maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ])
  ); // 17
  console.log(
    maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  ); // 10
  console.log(
    maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ])
  ); // 6