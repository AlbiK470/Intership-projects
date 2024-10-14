const reverseString = str => {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;

  };
  
  console.log(reverseString('hello')); // 'olleh'
  console.log(reverseString('world')); // 'dlrow'
  console.log(reverseString('')); // ''
  console.log(reverseString('h')); // 'h'