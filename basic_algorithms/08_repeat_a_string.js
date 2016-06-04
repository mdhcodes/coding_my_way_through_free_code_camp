// Free Code Camp
// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

// Repeat a string repeat a string

/*
Directions:
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

var repeatStringNumTimes = function(str, num) {
    
    var repeatedString = "";
    
    for(var i = num; i > 0; i--){
  	    
  	    if(num < 0){
  		      return '';
  	    } else {
  		      repeatedString += str; 
  	    }
    }
    
    return repeatedString;
    
};

repeatStringNumTimes("*", 3); // returns "***"
//repeatStringNumTimes("abc", 3); // returns "abcabcabc"
//repeatStringNumTimes("abc", 4); // returns "abcabcabcabc"
//repeatStringNumTimes("abc", 1); // returns "abc"
//repeatStringNumTimes("*", 8); // returns "********"
//repeatStringNumTimes("abc", -2); // returns ""
