// Free Code Camp
// https://www.freecodecamp.com/challenges/check-for-palindromes

// Check for Palindromes

var palindrome = function(str) {
    
    //str = str.toLowerCase().replace(/[\W+_]/g, ""); // OR
    
    str = str.toLowerCase().replace(/[^a-z|1-9]/g, "");
    
    var newStr = str.split("").reverse().join("");
    
    if (str === newStr) {  
        return true;
    } else {
        return false;
    }
    
};

palindrome("Ra/ce Ca_r");
