//  EX 1

function palindrome(word) {
  if (word == word.split().reverse().join()) {
    return true
  } return false
}

console.log(palindrome("madame"));


// EX 2

function findTheVowels(string) {
  const returnTheVowels = []
  const vowels = 'aeiou'
  const arrayOfTheString = string.split("")
  console.log(arrayOfTheString);
  for (let i = 0; i < arrayOfTheString.length; i++) {
    if (vowels.includes(arrayOfTheString[i])) {
      returnTheVowels.push(arrayOfTheString[i])
    }
  } return returnTheVowels.toString()
}

console.log(findTheVowels('qeinvqrvjmrc'));