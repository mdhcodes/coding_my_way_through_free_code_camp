// Free Code Camp
// https://www.freecodecamp.com/challenges/slasher-flick

// Slasher Flick

/* 
Directions:
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

var slasher = function(arr, howMany) {
    
    arr.splice(0, howMany);
		
    return arr;
    
};

slasher([1, 2, 3], 2); // returns [3]
//slasher([1, 2, 3], 0); // returns [1, 2, 3]
//slasher([1, 2, 3], 9); // returns []
//slasher([1, 2, 3], 4); // returns []
//slasher(["burgers", "fries", "shake"], 1); // returns ["fries", "shake"]
//slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // returns ["cheese", 4]
