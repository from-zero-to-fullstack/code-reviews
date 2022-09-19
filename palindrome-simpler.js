function checkPalindrome(word) {
  word = word.toLowerCase();
  const isPalindrome = word == word.split("").reverse().join("");

  if (isPalindrome) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
}

checkPalindrome("ABBA");
checkPalindrome("Sapo");
checkPalindrome("Arara");
