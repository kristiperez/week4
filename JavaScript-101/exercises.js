// Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
function reverseWord(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var word = "mom"
let result = reverseWord(word)
if (result == word) {
    console.log("Palindrome")
} else {
    console.log("not palindrome")
}
// Create an app which removes duplicates from an array 

let names = ["John","Mary","Alex","Steve","Mary","John"]
let newList = []
for(let index = 0; index<names.length; index++) {
    if(newList.includes(names[index])) {
        continue
    } else {
        newList.push(names[index])
    }
}
console.log(newList)

// Create an app whichs returns true/false depending on if the item is in the array

let numbers = [3,5,10,9,15]
let item = 14

function checkNum() {
    for(let index=0; index<numbers.length; index++) {
        if(numbers[index] == item) {
            return true
        } else {
            return false
        }
    }
}
let answer = checkNum(item)
console.log(answer)

//Create an app which finds the largest number in an array 

let Nums = [3,5,23,56,342]
let MaxNum = Nums[0]

function Maximum() {
    for(let index=0; index<numbers.length; index++) {
        if(Nums[index] > MaxNum) {
            MaxNum = Nums[index]
        }
    }
    return MaxNum
}
let max = Maximum()
console.log(max)

// Create an app which finds the smalest number in an array

let Nums2 = [3,5,23,56,342]
let MinNum = Nums2[0]

function Minimum() {
    for(let index=0; index<numbers.length; index++) {
        if(Nums[index] < MinNum) {
            MinNum = Nums2[index]
        }
    }
    return MinNum
}
let min = Minimum()
console.log(min)

//Create FizzBuzz app 

let number = 15

function divisible() {
    if(number % 3 == 0 && number % 5 ==0) {
        console.log("FIZZ BUZZ")
    } else if(number % 3 == 0) {
        consolse.log("FIZZ")
    } else if (number % 5 == 0) {
        console.log("BUZZ")
    }
}
divisible()

// Create an app which determines whether the number is even or odd. 

let givenNum = 15

function evenOdd() {
    if(givenNum % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
evenOdd()

// Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 
