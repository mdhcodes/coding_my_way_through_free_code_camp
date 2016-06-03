// Free Code Camp
// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

// Return Largest Numbers in Arrays

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

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
