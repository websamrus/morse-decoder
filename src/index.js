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


function decode(expr) {
    let msg="";

    for (let i = 0; i< expr.length;){
        let letter="";
       let symbolArr=expr.slice(i, i+10);
        for (let i = 0; i< symbolArr.length;){
            let symbol=symbolArr.slice(i, i+2);
            if (symbol == "**"){
                msg+=" ";
                break;
            }
            switch(symbol){
                case "10":  letter+="."; break;
                case "11": letter+="-"; break;
            }
            i+=2;
        }
        if(MORSE_TABLE[letter] != undefined)  msg+=MORSE_TABLE[letter];
       
        letter="";
        i+=10
    }
    return msg;
    
}


module.exports = {
    decode
}