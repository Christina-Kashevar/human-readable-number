module.exports = function toReadable (number) {
  if(number ===0 ) return 'zero';

  let obj ={
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }
  
  let str =number.toString().split('');
  let result = '';

  if (str.length === 3) {
    result += obj[str[0]] + ' hundred ';
    if (str[1] == 0 && str[2] == 0) return result.trim();
    str = str.slice(1)
  }

  if (str.length === 2) {
    if (str[0] == 1 || str[1] == 0) {
        result += obj[(str[0]+str[1])];
        return result
      }
    if (str[0] > 1) {
        result += obj[str[0] + '0'] +' ';
    }
    str = str.slice(1)
  }

  if (str.length === 1) {
    result += obj[str[0]];
  }
  
  return result
}
