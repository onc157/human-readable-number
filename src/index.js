module.exports = function toReadable (number) {
    number = number.toString();
    let numberObj = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen'
    }

    let decadeObj = {
      '0': '',
      '2': 'twenty',
      '3': 'thirty',
      '4': 'forty',
      '5': 'fifty',
      '6': 'sixty',
      '7': 'seventy',
      '8': 'eighty',
      '9': 'ninety'
    }

    let hundredObj = {
      '1': 'one hundred',
      '2': 'two hundred',
      '3': 'three hundred',
      '4': 'four hundred',
      '5': 'five hundred',
      '6': 'six hundred',
      '7': 'seven hundred',
      '8': 'eight hundred',
      '9': 'nine hundred'
    }

    if (number < 20) {
      return `${numberObj[number]}`

    } else if ((number < 100) && (number[1] == 0)) {
      return `${decadeObj[number[0]]}`

    } else if (number < 100) {
      return `${decadeObj[number[0]]} ${numberObj[number[1]]}`

    } else if ((number < 1000) && (number[1] == 0) && (number[2] != 0)) {
      return `${hundredObj[number[0]]} ${numberObj[number[2]]}`;

    } else if ((number.slice(1) > 0) && (number.slice(1) < 20)) {
      return `${hundredObj[number[0]]} ${numberObj[number.slice(1)]}`
    }
    else if ((number < 1000) && (number[1] == 0) && (number[2] == 0)) {
      return `${hundredObj[number[0]]}`;

    } else if ((number < 1000) && (number[1] != 0) && (number[2] == 0)) {
      return `${hundredObj[number[0]]} ${decadeObj[number[1]]}`;

    }
    return `${hundredObj[number[0]]} ${decadeObj[number[1]]} ${numberObj[number[2]]}`;
}
