console.log("hello from proplem 2")
// what we need ?
// we need to check if the first Number is eqal to the reverse of the last number

// what will we do ?
// We will convert the number yo string
// We will split this string to array
// We will reverse this string to array
// We will join this reverse string to array
// we will use if statement to check if the number in the array is eqal to the reverse number


// function isPalindrome(Number) {
//     let ReverseNum = Number.toString().split('').reverse().join('')
//     return Num == reversNum ? true : false 

// }

// console.log(isPalindrome(121));

// or


 function isPalindrom(Num) {
   let reversNum = Array.from(String(Num), Number).reverse().join("")
    let intoNum = parseInt(reversNum)
   console.log(typeof(intoNum))
   console.log(typeof(Num))

    return Num == reversNum ? true : false 

 }

 console.log(isPalindrom(-121));

