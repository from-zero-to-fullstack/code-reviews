const {
    isPalindrome,
    getMessage,
    convertToLowerCase,
    getFirstCharacter,
    getMiddleCharacters,
    getLastCharacter,
} = require('./palindrome');

test('transform string in lower case', () => {
    const current = convertToLowerCase('Sapo');
    expect(current).toBe('sapo');
});

test('get first char', () => {
    const current = getFirstCharacter('Sapo');
    expect(current).toBe('S');
});

test('get middle chars', () => {
    const current = getMiddleCharacters('Sapo');
    expect(current).toBe('ap');
});

test('get last char', () => {
    const current = getLastCharacter('Sapo');
    expect(current).toBe('o');
});

test('return [true] to [ABBA]', () => {
    const current = isPalindrome('ABBA');
    expect(current).toBe(true);
});

test('return [false] to [Sapo]', () => {
    const current = isPalindrome('Sapo');
    expect(current).toBe(false);
});

test('log [ABBA is a palindrome]', () => {
    const current = getMessage('ABBA', true);
    expect(current).toBe('ABBA is a palindrome');
});

test('log [Sapo is not a palindrome]', () => {
    const current = getMessage('Sapo', false);
    expect(current).toBe('Sapo is not a palindrome');
});
