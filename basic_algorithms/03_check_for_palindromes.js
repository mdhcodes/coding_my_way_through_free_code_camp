// Free Code Camp
// https://www.freecodecamp.com/challenges/check-for-palindromes

// Check for Palindromes

/*
Directions:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

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

palindrome("eye"); // returns a boolean
//palindrome("eye"); // returns true
//palindrome("race car"); // returns true
//palindrome("not a palindrome"); // returns false
//palindrome("A man, a plan, a canal. Panama"); // returns true
//palindrome("never odd or even"); // returns true
//palindrome("nope"); // returns false
//palindrome("almostomla"); // returns false
//palindrome("My age is 0, 0 si ega ym."); // returns true
//palindrome("1 eye for of 1 eye."); // returns false
//palindrome("0_0 (: /-\ :) 0-0"); // returns true
//palindrome("five|\_/|four"); // returns false
