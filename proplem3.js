console.log("hello from proplem 3")
// what we need ?
// we need to exclude the max and the min from the num of salary array 
// we need to get the average of the number that in the new array
// the average eqal the sm of the nmber that in the new array / the length of the Newarray

// what will we do ?
// we will put the inisial value if the array is null
// We will get the max number
// We will get the min number
// We will filter the array to exclude the max and the min numbers
// We will get the sum of the Newfilter array number
// we will get the average of the newarray numbers 


function getTheAverage(salary) {
if (salary == null) {
    return 0
} else if (salary.length <= 2) {
    return "there is No Max and Min Number"
} else if (salary.length > 2) {
    const maxnum = Math.max(...salary)
    const minnum = Math.min(...salary)
    const salaryfilter = salary.filter((x) => x !== maxnum && x !== minnum)
    const Newarraysalary = salaryfilter.reduce((acc , cur) => acc + cur , 0)
    const average = Newarraysalary / salaryfilter.length
    return average
}
}
console.log(getTheAverage([2000 , 3000]));


// or

// var average = function(salary) {
//     salary = salary.sort(function(a, b){return b - a})
//     salary.shift();
//     salary.pop();
//     let result = 0 
//     for (let i = 0; i < salary.length; i++) {
//         result = result + salary[i];
//     }
//     return result/salary.length
// }


// console.log(average[2000 , 4000 , 3000 , 1000])