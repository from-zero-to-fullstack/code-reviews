// Check if a word is a palindrome by a recursive function
function checkPalindrome(wordToPrint, word) {
  let str = word.toLowerCase()
  let wordStart = 0
  let wordEnd = str.length - 1

  // caso base: Se a palavra tem 1 ou 2 letras, é um palíndrome
  if (str.length <= 1) {
    return `Yes! ${wordToPrint} is a palíndrome!`
  }
  // Se as letras no início e no fim de palavra são diferentes, não é um palíndrome
  if (str.charAt(wordStart) !== str.charAt(wordEnd)) {
    return `I'm sorry! ${wordToPrint} is not a palíndrome!`
  }
  // Se as letras são iguais, cortar as letras no início e no fim e verificar a nova palavra (subword)
  let subword = word.slice(1, wordEnd)
  return checkPalindrome(wordToPrint, subword)
}

const abbaWord = 'ABBA'
console.log(checkPalindrome(abbaWord, abbaWord))
const sapoWord = 'Sapo'
console.log(checkPalindrome(sapoWord, sapoWord))
const araraWord = 'Arara'
console.log(checkPalindrome(araraWord, araraWord))
