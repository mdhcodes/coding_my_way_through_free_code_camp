// Free Code Camp
// https://www.freecodecamp.com/challenges/confirm-the-ending

// Confirm the Ending

/*
Directions:
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

var confirmEnding = function(str, target) {
    
    var str1 = target.length; // returns 2 for "me"
	  
	  // slice(-str1) === slice(-2) which will return the last two elements of the array
    
	  if(str.indexOf(' ') >= 0){
  		  return str.split('').slice(-str1).join('') === target;
	  } else {
  		  return str.charAt(str.length-1) === target;
	  }
    
};

confirmEnding("Bastian", "n"); // returns true
//confirmEnding("Connor", "n"); // returns false
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // returns false
//confirmEnding("He has to give me a new name", "name"); // returns true
//confirmEnding("He has to give me a new name", "me"); // returns true
//confirmEnding("He has to give me a new name", "na"); // returns false
//confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // returns false
