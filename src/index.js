const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function convert(value){
    newArr = new Array();
    for(var i=0; i < value.length; i++){
        if(value[i] === '.') {
             newArr.push('10');
        }else if(value[i] === '-') {
            newArr.push('11');
        }
    }
    return newArr.join('').padStart(10, "0");
}
function decode(expr) {
    let MORSE_VALUE = new Object();

    for (var key in MORSE_TABLE) {
        MORSE_VALUE[convert(key)] = MORSE_TABLE[key];
    }

    return expr.match(/.{1,10}/g).map(a => a.split('**********').map(b => MORSE_VALUE[b]).join(' ')).join('');
}

module.exports = {
    decode
}