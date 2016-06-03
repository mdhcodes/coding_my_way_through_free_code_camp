// Free Code Camp
// https://www.freecodecamp.com/challenges/reverse-a-string

// Reverse a String

var reverseString = function(str){
    
	  var reversedStr = [];
    str = str.split('');
	  
	  for(var i = str.length-1; i >=0; i--){
		    reversedStr.push(str[i]);	
	  }
	  
	  return reversedStr.join('');
    
};

reverseString("hello");



/*
function reverseString(str) {
  
    var newStr = str.split("");
    var reversedStr = newStr.reverse().join("");
    str = reversedStr;

    return str;

}

reverseString("hello");
*/
