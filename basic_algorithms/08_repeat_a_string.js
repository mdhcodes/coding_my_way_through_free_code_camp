// Free Code Camp
// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

// Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
    
    var repeatedString = "";
    
    for(var i = num; i > 0; i--){
  	    
  	    if(num < 0){
  		      return '';
  	    } else {
  		      repeatedString += str; 
  	    }
    }
    
    return repeatedString;
    
}

repeatStringNumTimes("abc", 3);
