// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
// YOUR CODE GOES HERE

var words = ['This ', 'is ', 'JavaScript ', 'Coding!'];

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE

var sentance = "";

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE

function createSentence(words){
    for(i=0; i <= 3 ; i++ ){
        sentance += words[i];
    }
    return sentance
}

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log(createSentence(words));