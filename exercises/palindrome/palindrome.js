function checkPalindrome(word) {
    const itIsPalindrome = isPalindrome(word);
    return getMessage(word, itIsPalindrome);
}

function isPalindrome(word) {
    if (word.length < 2) {
        return true;
    }

    const lowerCaseWord = convertToLowerCase(word);

    const firstCharacter = getFirstCharacter(lowerCaseWord);
    const lastCharacter = getLastCharacter(lowerCaseWord);

    if (firstCharacter == lastCharacter) {
        const middleCharacters = getMiddleCharacters(lowerCaseWord);
        return isPalindrome(middleCharacters);
    }

    return false;
}

function getMessage(word, itIsPalindrome) {
    return `${word} ${itIsPalindrome ? 'is' : 'is not'} a palindrome`;
}

function convertToLowerCase(string) {
    return string.toLowerCase();
}

function getFirstCharacter(string) {
    return string.charAt(0);
}

function getMiddleCharacters(string) {
    return string.slice(1, -1);
}

function getLastCharacter(string) {
    return string.slice(-1);
}

console.log(checkPalindrome('ABBA'));
console.log(checkPalindrome('Sapo'));
console.log(checkPalindrome('Arara'));

module.exports = {
    isPalindrome,
    getMessage,
    convertToLowerCase,
    getFirstCharacter,
    getMiddleCharacters,
    getLastCharacter,
};
