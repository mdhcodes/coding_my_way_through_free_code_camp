// Free Code Camp
// https://www.freecodecamp.com/challenges/caesars-cipher

// Caesars Cipher

/*
Directions:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

var rot13 = function(str) {
  
  var decodedArray = [];
  str = str.toUpperCase();

	 
  for(var i = 0; i < str.length; i++) {
  	
  	var characterNum = str.charCodeAt(i);
  	
  	if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
  		
  		decodedArray.push(String.fromCharCode(characterNum));
  		
  	} else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
  		// add 13
  		decodedArray.push(String.fromCharCode(characterNum + 13));
  		
  	} else {
  		// str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90
  		// subtract 13
  		
  		decodedArray.push(String.fromCharCode(characterNum - 13));
  	}
  
  
  }
	return decodedArray.join(''); 
  
};

rot13("SERR PBQR PNZC"); // returns "FREE CODE CAMP"
//rot13("SERR CVMMN!"); // returns "FREE PIZZA!"
//rot13("SERR YBIR?"); // returns "FREE LOVE?"
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
