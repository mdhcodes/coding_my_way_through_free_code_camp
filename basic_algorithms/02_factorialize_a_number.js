// Free Code Camp
// https://www.freecodecamp.com/challenges/factorialize-a-number

// Factorialize a Number

/*
Directions:
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

var factorialize = function(num) {
    
    var factor = 1;
	  
	  for(var i = num; i > 0; i--){
		    factor *= i;
	  }
	  
    return factor;
    
};

factorialize(5); // returns a number
//factorialize(5); // returns 120
//factorialize(10); // returns 3628800
//factorialize(20); // returns 2432902008176640000
//factorialize(0); // returns 1
