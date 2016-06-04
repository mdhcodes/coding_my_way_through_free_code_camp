// Free Code Camp
// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

// Return Largest Numbers in Arrays

/*
Directions:
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

var largestOfFour = function(arr) {
	  
	  var largestNumber = arr[0][0];
	  var newArr = [];
	  
	  for(var i = 0; i < arr.length; i++){
        
		    largestNumber = -9999999999;
		    for(var j = 0; j < arr[i].length; j++){
            
			      if(arr[i][j] > largestNumber){
				        largestNumber = arr[i][j];
				        
			      }
		    }
		    
		    newArr.push(largestNumber);
	  }
    
	  return newArr;
    
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns an array

//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns [27,5,39,1001]

//largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // returns [9, 35, 97, 1000000]

