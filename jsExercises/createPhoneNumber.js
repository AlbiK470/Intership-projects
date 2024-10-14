const createPhoneNumber = numbers => {
      let  phoneNumber = '';
      phoneNumber += '(';
      for (let i = 0; i < 3; i++) {
        phoneNumber += numbers[i];
      }
      phoneNumber += ') ';
      for (let i = 3; i < 6; i++) {
        phoneNumber += numbers[i];
      }
      for (let i = 6; i < 10; i++){
        phoneNumber += numbers[i];
      }
      return phoneNumber;
  };
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'