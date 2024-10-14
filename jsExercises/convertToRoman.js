const convertToRoman = number => {
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];
  
    let roman = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (number >= romanNumerals[i].value) {
        roman += romanNumerals[i].symbol;
        number -= romanNumerals[i].value;
      }
    }
  
    return roman;
  };
  
  console.log(convertToRoman(4)); // IV
  console.log(convertToRoman(9)); // IX
  console.log(convertToRoman(11)); // XI
  console.log(convertToRoman(19)); // XIX
  console.log(convertToRoman(22)); // XXII
  console.log(convertToRoman(15)); // XV
  console.log(convertToRoman(39)); // XXXIX
  console.log(convertToRoman(160)); // CLX
  console.log(convertToRoman(207)); // CCVII
  console.log(convertToRoman(246)); // CCXLVI
  console.log(convertToRoman(789)); // DCCLXXXIX
  console.log(convertToRoman(1009)); // MIX
  console.log(convertToRoman(1066)); // MLXVI
  console.log(convertToRoman(1776)); // MDCCLXXVI
  console.log(convertToRoman(1918)); // MCMXVIII
  console.log(convertToRoman(1954)); // MCMLIV
  console.log(convertToRoman(2014)); // MMXIV
  console.log(convertToRoman(2421)); // MMCDXXI
  console.log(convertToRoman(3999)); // MMMCMXCIX