console.log("hello from proplem 1")
// what we need ?
// we need to get two number from the array whose sum is equal to the value of the target

// what will we do ?
// We will make a loop on the array
// We will make another loop on the array
// we will make if statement with condition (the index number in the first loob + the index number in the second loop equal two the target )

function Twosum(nums , target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target ) {
                return [i , j]
            } 
            }
        }
    }

console.log(Twosum([2 , 5 , 7 , 25 , 12 , 10] , 10))











