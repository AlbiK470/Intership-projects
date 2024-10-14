const descendingOrder = n => {
    let nString = n.toString();
    let nArray = nString.split("");

    nArray.sort((a, b) => {
        if(a < b) return 1;
        if (a > b) return -1;
        return 0;
  });

  let resultString = nArray.join('');

  let result = parseInt(resultString, 10);

  return result;

};

  console.log(descendingOrder(0)); // 0
  console.log(descendingOrder(1)); // 1
  console.log(descendingOrder(1021)); // 2110
  console.log(descendingOrder(42145)); // 54421
  console.log(descendingOrder(145263)); // 654321
  console.log(descendingOrder(123456789)); // 987654321