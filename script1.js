//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// create new SORTED array without changing original
function sortTheArray(arr) {
    return arr.slice().sort((a,b) => a - b);
}

// create new finalArray with numerical values grouped together in sub arrays
function cleanTheRoom(arr) {
    let sortedArray = sortTheArray(arr);
    var finalArray = [];
    var tempArr = [arr[0]];
    for(let i = 1; i < sortedArray.length ;i++) {
        if(sortedArray[i] === sortedArray[i-1] ){  // if value is equal to last value, append to sub array
            tempArr.push(sortedArray[i]);
        } else {                                   // if value is not equal to last value,
            finalArray.push(tempArr);              // append subarray constructed so far to final array, and 
            tempArr = [sortedArray[i]];            // THEN start new subarray with current value
        }
        if(i === (sortedArray.length) - 1){        // last index, push this last array to final Array
            finalArray.push(tempArr);
        }
    }
    return finalArray;
}

cleanTheRoom(arr);

/* ----------------------------------------------------------*/
//Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// this function returns the first two numbers whose sum is the given parameter "sum"
function findSomeAddends(arr, sum) {
    for(let index = 0; index < arr.length; index++) { // loop through each index
        for(let i = index; i < arr.length; i++) {     // THEN loop through all index afterwards
            if(arr[index] + arr[i] == sum){           // and check their sums
                return [arr[index], arr[i]];
            }
        }
    }
}

// this function returns all pairs of numbers whose sum is the given parameter "sum"
function findAllAddends(arr, sum) {
    let answers = []; // array to store pairs
    for(let index = 0; index < arr.length; index++) { // loop through each index
        for(let i = index; i < arr.length; i++) {     // THEN loop through all index afterwards
            if(arr[index] + arr[i] == sum){           // and check their sums
                answers.push([arr[index], arr[i]]);  
            }
        }
    }
    return answers;
}

const arr = [1,2,3,4];
const sum = 5;

console.log(findSomeAddends(arr,sum));
console.log(findAllAddends(arr,sum));

/*------------------------------------------------------*/
//Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function getTheInput() { // get input from user, only accepts specified input formats
    const input = prompt("Input either '#XXXXXX' for hex -> rgb or 'X,X,X' for rgb -> hex: ");
    const hexRegex = /#[\w\d]{6}/;
    const rgbRegex = /[\d]{1,3},[\d]{1,3},[\d]{1,3}/;
    if(hexRegex.test(input)){
        return hextoDec(input);
    }else if(rgbRegex.test(input)){
        return decToHex(input);
    }else{
        return alert('Please provide input in the specified format!')
    }
}

function hextoDec(input) { // convert hexidecimal to decimal
    var r = parseInt((input[1]+input[2]),16);
    var g = parseInt((input[3]+input[4]),16);
    var b = parseInt((input[5]+input[6]),16);

    return `rgb(${r}, ${g}, ${b})`;
}

function decToHex(input) { // convert decimal to hexidecimal
    var inputSplit = input.split(',');
    var hexPair1 = Number(inputSplit[0]).toString(16);
    var hexPair2 = Number(inputSplit[1]).toString(16);
    var hexPair3 = Number(inputSplit[2]).toString(16);

    return `#${hexPair1}${hexPair2}${hexPair3}`;
}

var answer = getTheInput();


