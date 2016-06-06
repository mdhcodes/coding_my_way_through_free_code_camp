// Free Code Camp
// https://www.freecodecamp.com/challenges/falsy-bouncer

// Falsy Bouncer

/*
Directions:
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  
var truthyArray = [];

	for(var i = 0; i < arr.length; i++) {
		
		if(Boolean(arr[i]) === true) {
			
			truthyArray.push(arr[i]); 
		}

	}
	
  	return truthyArray;
  
}

bouncer([7, "ate", "", false, 9]); // returns [7, "ate", 9]
//bouncer(["a", "b", "c"]); // returns ["a", "b", "c"]
//bouncer([false, null, 0, NaN, undefined, ""]); // returns []
//bouncer([1, null, NaN, 2, undefined]); // returns [1, 2]
