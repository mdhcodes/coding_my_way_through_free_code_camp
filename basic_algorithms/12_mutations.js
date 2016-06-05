// Free Code Camp
// https://www.freecodecamp.com/challenges/mutations

// Mutations

/*
Directions:
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
 
  	// Are all the letters in string2 found in string1?
	// All strings.toLowerCase() to ignore case
	
	var string1 = arr[0].toLowerCase().split('');
	var string2 = arr[1].toLowerCase().split('');
	
	for(var i = 0; i < string2.length; i++) {
			
		//Is the letter string2[i] === to a letter in string1?
	
		if(string1.indexOf(string2[i]) === -1) {
			return false;
		} 
	
	}
	
	return true;	

  
}


mutation(["hello", "hey"]); // returns false
//mutation(["hello", "Hello"]); // returns true
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // returns true
//mutation(["Mary", "Army"]); // returns true
//mutation(["Mary", "Aarmy"]); // returns true
//mutation(["Alien", "line"]); // returns true
//mutation(["floor", "for"]); // returns true
//mutation(["hello", "neo"]); // returns false
//mutation(["voodoo", "no"]); // returns false
