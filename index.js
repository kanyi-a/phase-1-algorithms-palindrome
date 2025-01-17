//function reverse(word){
//const wordArray = word.split("")
//const reversedWordArray = wordArray.reverse();
//const reverseWord = reversedWordArray.join("")
//return reversedWord;


function reversedString(word) {
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  // Write your algorithm here
  return word === reversedString(word);
}


  /*
    Add your pseudocode here

    REVERSE THE INPUT STRING
  const reverseWord = reverse(word);

  if(word === reversedString) {
    console.log('It is a palindrome');
  }
  else {
    console.log('It is not a palindrome');
  }

/*
1.split string(split())
2.reverse array(reverse())
3.join array(join())
4.use if statement
5.Call function

/* 
  Add written explanation of your solution here
  1.Convert the string into an array using the split method then reverse
  2.Use new array's values to get a reversed array then join the reversed array using the join() method to end up with a reversed string. 
  3.Compare if the joined reversed string to the initial (they sould be equal to one another)
  4.Add an if statement and console log if its a palindrome or not.
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
