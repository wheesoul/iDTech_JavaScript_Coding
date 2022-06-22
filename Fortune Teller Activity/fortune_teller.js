// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions

function isFortuneGood(fortune) {
    let response;
    if(fortune <= 3)
    {
        response = 'a low fortune'
    }
    else if(fortune > 3 && fortune <= 7)
    {
        response = 'an average fortune'
    }
    else if (fortune > 7 && fortune <= 10)
    {
        response = 'a good fortune'
    }
    else
    {
        response = 'an unreadable fortune, try again'
    }
    return response
}

console.log('You have ', isFortuneGood(7));


// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

