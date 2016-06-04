// Free Code Camp
// https://www.freecodecamp.com/challenges/title-case-a-sentence

// Title Case a Sentence

/*
Directions:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

var titleCase = function(str) {
	  
	  var newStr = [];
    
    str = str.toLowerCase().split(" ");
    
    for(var i = 0; i < str.length; i++){
        
    	  //newStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1)); // OR

    	  newStr.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    
    return newStr.join(" ");
    
};

titleCase("I'm a little tea pot"); // returns a string
//titleCase("I'm a little tea pot"); // returns  "I'm A Little Tea Pot"
//titleCase("sHoRt AnD sToUt"); // returns "Short And Stout"
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // returns "Here Is My Handle Here Is My Spout"
