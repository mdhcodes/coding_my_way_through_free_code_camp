// Free Code Camp
// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

// Sum All Numbers in a Range

/*
Directions:
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

var sumAll(arr) = function() {
  
  var min = Math.min(arr[0],arr[1]);
	var max = Math.max(arr[0],arr[1]);
	var newArray = [];
	var count = min;
	
	while(count <= max) {
		newArray.push(count);
		count++;
	}
	
	return newArray.reduce(function(prev, curr) {
  		return prev + curr;
  	});

};


sumAll([1, 4]); // returns 10
//sumAll([4, 1]); // returns 10
//sumAll([5, 10]); // returns 45
//sumAll([10, 5]); // returns 45
