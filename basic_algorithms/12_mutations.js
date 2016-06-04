// Free Code Camp
// https://www.freecodecamp.com/challenges/mutations

// Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".



mutation(["hello", "hey"]); // returns false
mutation(["hello", "Hello"]); // returns true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // returns true
mutation(["Mary", "Army"]); // returns true
mutation(["Mary", "Aarmy"]); // returns true
mutation(["Alien", "line"]); // returns true
mutation(["floor", "for"]); // returns true
mutation(["hello", "neo"]); // returns false
mutation(["voodoo", "no"]); // returns false
