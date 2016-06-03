// Free Code Camp
// https://www.freecodecamp.com/challenges/confirm-the-ending

// Confirm the Ending

var confirmEnding = function(str, target) {
    
    var str1 = target.length; // returns 2 for "me"
	  
	  // slice(-str1) === slice(-2) which will return the last two elements of the array
    
	  if(str.indexOf(' ') >= 0){
  		  return str.split('').slice(-str1).join('') === target;
	  } else {
  		  return str.charAt(str.length-1) === target;
	  }
    
};

//confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "me");
