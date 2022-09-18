// Check if a word is a palindrome by a recursive function

function checkPalindrome(word) {
  let str = word.toLowerCase()
  let wordStart = 0
  let wordEnd = str.length - 1

  // caso base: Se a palavra tem 1 ou 2 letras, é um palíndrome
  if (str.length <= 1) {
    return `Yes! ${word} it's a palíndrome!`
  }
  // Se as letras no início e no fim de palavra são diferentes, não é um palíndrome
  if (str.charAt(wordStart) !== str.charAt(wordEnd)) {
    return `I'm sorry! ${word} it's not a palíndrome!`
  }
  // Se as letras são iguais, cortar as letras no início e no fim e verificar a nova palavra (subword)
  let subword = word.slice(1, wordEnd)
  return checkPalindrome(subword)
}

console.log(checkPalindrome('ABBA'))
console.log(checkPalindrome('Sapo'))
console.log(checkPalindrome('Arara'))
