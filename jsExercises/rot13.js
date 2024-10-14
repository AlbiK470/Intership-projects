const rot13 = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode =  str.charCodeAt(i);
        if (charCode >=  65 && charCode <= 77) {
            result +=  String.fromCharCode(charCode + 13);
        }  else if (charCode >= 78 && charCode <= 90) {
            result += String.fromCharCode(charCode - 13);
        } else if (charCode >=  97 && charCode <= 109) {
            result += String.fromCharCode(charCode + 13);
        } else if  (charCode >= 110 && charCode <= 122) {
            result += String.fromCharCode(charCode - 13);
        } else {
            result += str[i];
        }
    }
        return result;
  };
  
  console.log(rot13('az AZ')); // nm NM
  console.log(rot13('10+2 is twelve.')); // 10+2 vf gjryir.
  console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm