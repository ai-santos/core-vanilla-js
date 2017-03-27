// Define a function max() that takes two numbers as arguments and returns the largest of them.
function max(a, b) {
  if(a > b) return a
  else return b;
}

// Use the if-then-else construct available in Javascript.
if(num > max) {
  return num;
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c){
  var final = [a, b, c].sort();
  return final[2];
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function findVowel(letter) {
  var vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < vowels.length; i++) {
    if(letter === vowels[i]) {
      return true;
    }
  }
  return false;
}

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(str){
  var q = '';
  str.split("").map(function(p, c){
      if(p != ' ') q += p + 'o' + p;
          else q += ' ';
  });
  return q;
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function multiply(numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total = (total * numbers[i]);
  }
  return total;
}

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverseStr(str) {
  var arrayChar = str.split('');
  return arrayChar.reverse().join('');
}

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
function translate(str){
  var lexicon = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
      q = "";
  str.toLowerCase().split(" ").map(function(p, c){
      q += lexicon[p] + ' ';
  });
  return q;
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
    }
  }

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr, int){
  var q = [],
      k = 0;
  arr.map(function(p, c){
      if(p.split('').length > int) q[k++] = p;
  });
  return q;
};


//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(str){
  return str.split('').reduce(function(obj, letter){
      obj[letter] = ++obj[letter] || 1;
      return obj;
  }, {});
}

