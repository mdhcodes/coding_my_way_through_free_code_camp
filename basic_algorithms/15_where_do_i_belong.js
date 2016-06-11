// Free Code Camp
// https://www.freecodecamp.com/challenges/where-do-i-belong

// Where do I belong

/*
Directions:
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

var getIndexToIns = function(arr, num) {

	arr.push(num);

	arr.sort(function(a,b) {

		return a - b;

	});

	return arr.indexOf(num);

};

getIndexToIns([10, 20, 30, 40, 50], 35); // returns 3
//getIndexToIns([10, 20, 30, 40, 50], 30); // returns 2
//getIndexToIns([40, 60], 50); // returns 1
//getIndexToIns([3, 10, 5], 3); // returns 0
//getIndexToIns([5, 3, 20, 3], 5); // returns 2
//getIndexToIns([2, 20, 10], 19); // returns 2
//getIndexToIns([2, 5, 10], 15); // returns 3
