const ENCRYPT = 0;
const DECRYPT = 1;
const pAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const eAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

let enigma = (message, plainAlphabet, encryptedAlphabet, encryptDecrypt) => {
    let returnedMessage = "";

    if(plainAlphabet.length === encryptedAlphabet.length){
        for(character of message) {
            switch(encryptDecrypt) {
                case ENCRYPT: 
                    if(plainAlphabet.indexOf(character) !== -1) {
                        returnedMessage = returnedMessage + encryptedAlphabet[plainAlphabet.indexOf(character)];
                    }
                    else {
                        returnedMessage = returnedMessage + character;
                    }
                    break;

                case DECRYPT:
                    if(encryptedAlphabet.indexOf(character) !== -1) {
                        returnedMessage = returnedMessage + plainAlphabet[encryptedAlphabet.indexOf(character)];
                    }
                    else {
                        returnedMessage = returnedMessage + character;
                    }
                    break;

                default: 
                    break;
            }
        }
    }

    return returnedMessage;
}

let encryptButtonHandler = () => {
    document.getElementById("encryptedMessage").value = 
        enigma(document.getElementById("decryptedMessage").value,pAlphabet,eAlphabet,ENCRYPT);
}

let decryptButtonHandler = () => {
    document.getElementById("decryptedMessage").value = 
        enigma(document.getElementById("encryptedMessage").value,pAlphabet,eAlphabet,DECRYPT);
}

window.onload = () => {
    document.getElementById("encryptButton").addEventListener("click",encryptButtonHandler);
    document.getElementById("decryptButton").addEventListener("click",decryptButtonHandler);
}