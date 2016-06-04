// Free Code Camp
// https://www.freecodecamp.com/challenges/reverse-a-string

// Reverse a String

/*
Directions:
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

var reverseString = function(str){
    
	  var reversedStr = [];
    str = str.split('');
	  
	  for(var i = str.length-1; i >=0; i--){
		    reversedStr.push(str[i]);	
	  }
	  
	  return reversedStr.join('');
    
};

reverseString("hello"); // returns a string
//reverseString("hello"); // returns "olleh"
//reverseString("Howdy"); // returns "ydwoH"
//reverseString("Greetings from Earth"); // returns "htraE morf sgniteerG"


/*
function reverseString(str) {
  
    var newStr = str.split("");
    var reversedStr = newStr.reverse().join("");
    str = reversedStr;

    return str;

}

reverseString("hello");
*/
