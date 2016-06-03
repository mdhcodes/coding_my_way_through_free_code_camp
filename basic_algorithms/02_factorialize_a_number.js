// Free Code Camp
// https://www.freecodecamp.com/challenges/factorialize-a-number

// Factorialize a Number


var factorialize = function(num) {
    
    var factor = 1;
	  
	  for(var i = num; i > 0; i--){
		    factor *= i;
	  }
	  
    return factor;
    
};

factorialize(5);
