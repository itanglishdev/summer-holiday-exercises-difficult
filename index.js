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
  for (let i = 0; i < arrayOfTheString.length; i++) {
    if (vowels.includes(arrayOfTheString[i])) {
      returnTheVowels.push(arrayOfTheString[i])
    }
  } return returnTheVowels.toString()
}

console.log(findTheVowels('qeinvqrvjmrc'));

// Ex 4

function fibonacciSequence(entry) {
  let returnFibonacci = 0
  const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
  return fibonacci[entry]
}

console.log("V1", fibonacciSequence(0));

function fibonacciSequenceVTwo(entry) {
  const fibonacci = [0, 1]

  if (entry !== 0) {
    for (let i = 1; i <= entry; i++) {
      let outcome = fibonacci[i - 1] + fibonacci[i]
      fibonacci.push(outcome)
    } return fibonacci[entry]

  } return entry
}

console.log("V2", fibonacciSequenceVTwo(0));

