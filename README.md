/\*\*

- 02
- String Palindrome
- A string is a palindrome if it is read the same from forward or backward. For example,
- dad reads the same either from forward or backward. So the word dad is a palindrome.
- Similarly, madam is also a palindrome.
- Create a function that returns if a string is a palindrome
- Optional: make an one liner solution
  \*/
  ​
  /\*\*
- 03
- Find the vowels
- Write a function that accepts a string
- and finds and returns the vowels in it
  \*/
  ​
  /\*\*
- Solution
  \*/
  function func(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  ​
  let counter = 0
  ​
  for (let char of string.toLowerCase()) {
  if (vowels.includes(char)) counter++
  }
  ​
  return counter;
  }
  ​
  /\*\*
- 04
- Fibonacci sequence - 0,1,1,2,3,5,8,13,21,…
- write a function that returns the nth entry in the Fibonacci sequence,
- where n is a number you pass in as an argument to the function
  \*/
  /\*\*
- Solution
  \*/
  function fibonacci(num) {
  ​
  let result = [ 0, 1 ];
  ​
  for(let i = 2; i <= num; i++){
  ​
  let prevNum1 = result[i-1];
  let prevNum2 = result[i-2];
  ​
  result.push( prevNum1 + prevNum2);
  }
  ​
  return result[num];
  }
  /\*\*
- Solution 2 - recursion
  \*/
  function fibonacci(num) {
  if(num < 2){
  ​
  return num;
  ​
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
  }
  ​
  /\*\*
- 05
- Anagram
- Definition:- A word is an anagram of another word if they are using the same
- letters with the same quantity, but arranged differently.
-
- write a function that checks if two provided strings are anagrams of each other;
- letter casing shouldn’t matter.
- Also, consider only characters, not spaces or punctuation. For Example:
- anagram('fried','fired') // true;
- anagram('gainly', 'lying') //true;
- anagram('listen', 'bye') // false;
  \*/
  /\*\*
- Solution
  \*/
