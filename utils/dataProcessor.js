const isNumber = (char) => !isNaN(char) && !isNaN(parseFloat(char));

const isAlphabet = (char) => /^[a-zA-Z]$/.test(char);

const isSpecialCharacter = (char) => !isNumber(char) && !isAlphabet(char);

const processConcatString = (alphabets) => {
    let allChars = [];
    
    alphabets.forEach(item => {
        const str = item.toString();
        for (let char of str) {
            if (isAlphabet(char)) {
                allChars.push(char.toLowerCase());
            }
        }
    });
    
    allChars.reverse();
    
    let result = '';
    for (let i = 0; i < allChars.length; i++) {
        if (i % 2 === 0) {
            result += allChars[i].toUpperCase();
        } else {
            result += allChars[i].toLowerCase();
        }
    }
    
    return result;
};

const processDataArray = (data) => {
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    
    data.forEach(item => {
        const str = item.toString();
        
        if (isNumber(str)) {
            const num = parseInt(str);
            sum += num;
            
            if (num % 2 === 0) {
                evenNumbers.push(str);
            } else {
                oddNumbers.push(str);
            }
        }
        else if (str.split('').every(char => isAlphabet(char))) {
            alphabets.push(str.toUpperCase());
        }
        else if (str.length === 1 && isSpecialCharacter(str)) {
            specialCharacters.push(str);
        }
        else if (str.split('').some(char => isAlphabet(char))) {
            alphabets.push(str.toUpperCase());
        }
        else {
            specialCharacters.push(str);
        }
    });
    
    const concatString = processConcatString(alphabets);
    
    return {
        oddNumbers,
        evenNumbers,
        alphabets,
        specialCharacters,
        sum: sum.toString(),
        concatString
    };
};

module.exports = {
    isNumber,
    isAlphabet,
    isSpecialCharacter,
    processConcatString,
    processDataArray
};
