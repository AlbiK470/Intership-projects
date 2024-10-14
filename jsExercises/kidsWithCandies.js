const kidsWithCandies = (candies, extraCandies) => {
    const maxCandy = Math.max(...candies);

    const result = [];
    for (let i = 0;  i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxCandy){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
  };
  
  console.log(kidsWithCandies([12, 1, 12], 10)); // [true, false, true]
  console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]