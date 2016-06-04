// Free Code Camp
// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

// Find the Longest Word in a String

/*
Directions:
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

var findLongestWord = function(str) {
    
    str = str.split(" ");
	  var longestWord = str[0];
	  
	  for(var i = 0; i < str.length; i++){
		    
		    if(longestWord.length < str[i].length) {
			      longestWord = str[i];
		    }
		    
	  }
	  
	  return longestWord.length;
    
};

findLongestWord("The quick brown fox jumped over the lazy dog"); // returns a number
//findLongestWord("The quick brown fox jumped over the lazy dog"); // returns  6
//findLongestWord("May the force be with you"); // returns  5
//findLongestWord("Google do a barrel roll"); // returns  6
//findLongestWord("What is the average airspeed velocity of an unladen swallow"); // returns  8
//findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // returns  19
