// Free Code Camp
// https://www.freecodecamp.com/challenges/chunky-monkey

// Chunky Monkey

/*
Directions:
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

var chunkArrayInGroups = function(arr, size) {
    
    var chunks = [];
    
    for(var i = 0; i < arr.length; i+=size){
  	    chunks.push(arr.slice(i, i+size));
    }
    
    return chunks;
    
};

chunkArrayInGroups(["a", "b", "c", "d"], 2); // returns [["a", "b"], ["c", "d"]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // returns [[0, 1, 2], [3, 4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // returns [[0, 1], [2, 3], [4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // returns [[0, 1, 2, 3], [4, 5]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // returns [[0, 1, 2], [3, 4, 5], [6]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // returns [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
