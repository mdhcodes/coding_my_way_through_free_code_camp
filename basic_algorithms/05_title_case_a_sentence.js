// Free Code Camp
// https://www.freecodecamp.com/challenges/title-case-a-sentence

// Title Case a Sentence

var titleCase = function(str) {
	  
	  var newStr = [];
    
    str = str.toLowerCase().split(" ");
    
    for(var i = 0; i < str.length; i++){
        
    	  //newStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1)); // OR

    	  newStr.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    
    return newStr.join(" ");
    
};

titleCase("I'm a little tea pot");
