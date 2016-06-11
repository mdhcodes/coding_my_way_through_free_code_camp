// Free Code Camp
// https://www.freecodecamp.com/challenges/seek-and-destroy

// Seek and Destroy

/*
Directions:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.

Remove all elements from the initial array that are of the same value as these arguments.
*/

var destroyer = function(arr) {

	var args = Array.prototype.slice.call(arguments); // [ [ 3, 5, 1, 2, 2 ], 2, 3, 5 ]
	var seekAndDestroyArray = [];
	args = args.splice(1); // args = [ 2, 3, 5 ]


	  arr.forEach(function(element) { // arr = [ 3, 5, 1, 2, 2 ]

        //console.log(element); // 3,5,1,2,2
			  //console.log(args.indexOf(element)); // 1, 2, -1, 0, 0

		    if(args.indexOf(element) === -1) {

			      seekAndDestroyArray.push(element);

		    }


	});

	return seekAndDestroyArray;

};

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1, 1]
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // returns [1, 5, 1]
//destroyer([3, 5, 1, 2, 2], 2, 3, 5); // returns [1]
//destroyer([2, 3, 2, 3], 2, 3); // returns []
//destroyer(["tree", "hamburger", 53], "tree", 53); // returns ["hamburger"]
