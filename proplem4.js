
console.log("hello from proplem 4")
// what we need ?
// we need to convert the roman number into integer from  array of object

// what will we do ?
// We will create a array of object that contain  the roman hash 
// we will create the intial value of the result
// We will create a loop
// We will create a 6 conditions 


  const romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  function romanToInt(s) {
    let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (1 <= s.length <= 15 &&  1 <= result <= 3999 ) {
        if (s[i] === "I" && s[i + 1] === "V") {
            result += 4;
            i++;
          } else if (s[i] === "I" && s[i + 1] === "X") {
            result += 9;
            i++;
          } else if (s[i] === "X" && s[i + 1] === "L") {
            result += 40;
            i++;
          } else if (s[i] === "X" && s[i + 1] === "C") {
            result += 90;
            i++;
          } else if (s[i] === "C" && s[i + 1] === "D") {
            result += 400;
            i++;
          } else if (s[i] === "C" && s[i + 1] === "M") {
            result += 900;
            i++;
          } else {
            result += romanNums[s[i]];
          }
    }
    }
    return result;
  }

console.log(romanToInt("MCMXCIV"))
  // s = 1994
