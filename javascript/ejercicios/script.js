//Q12: Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time 
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

function findMissing(arrayOfIntegers, upperBound, lowerBound){
    for(var i = lowerBound; i <= upperBound; i++){
        if(!arrayOfIntegers.includes(i))
            console.log("missing number is:",i);
    }
}

//console.log("Q12");
//findMissing(arrayOfIntegers, upperBound, lowerBound);


//Q13: Remove duplicates of an array and return an array of only unique elements
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

var array2 = [];

function duplicate(array,array2){
    for(i = 0; i < array.length; i++){
        if(!array2.includes(array[i])){
            array2.push(array[i]);
        }
    }

    console.log("array2:",array2);
}

// console.log("Q13");
// duplicate(array,array2);


//revisar si un string es un palindromo
function isPalindrome(str){
    //lowercase all text
    str = str.replace(/\W/g, '').toLowerCase();
    return(str == str.split('').reverse().join(''));
}

//fibonacci series
function fibonaci(n){
    if(n < 2)
        return n;

    return fibonaci(n -1) + fibonaci(n - 2);
}

//reverse array
var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];

function reverseArray(arr){
    var newArray = [];
    for(let i = arr.length -1; i >= 0; i--)
        newArray.push(arr[i]);

    return newArray;
}

//with reverse
function reverseArray2(arr){
    return arr.reverse();
}