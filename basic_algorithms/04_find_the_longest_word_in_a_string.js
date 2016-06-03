// Free Code Camp
// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

// Find the Longest Word in a String

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

findLongestWord("The quick brown fox jumped over the lazy dog");
