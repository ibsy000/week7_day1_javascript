//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  find the index of the first 
    non-consecutive element in the array. 
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]
// my attempt... I couldn't figure it out.. ):

// for (let i in exerciseOneArr){
// } if (exerciseOneArr[i] + 1 != exerciseOneArr[i + 1]){
//     console.log(exerciseOneArr[i])
// }

// The solution below is from Julie's solution this morning, I went over it
// during lunch to go back over it to get a better understanding and apply my
// own notes

/* seeing the solution it makes sense to me now.... 
    since there is no range function in JS we have to define a variable to act as
    the index (i) and set it equal to the index we want to start the loop (0)
    next the for loop condition i(index) is < array.length 
    then increment i by 1 (i++) everytime it loops through to move on to the next
    index
    now the 'if' statement is almost exactly like in Python
    finally "print" console.log(result)
    the break is added so the for loop ends once the result is found
*/
for (let i = 0; i < exerciseOneArr.length; i++){
    if (exerciseOneArr[i]+1 != exerciseOneArr[i+1]){
        console.log(exerciseOneArr[i])
        break
    }
}


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually 
and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// This exercise I did attempt on my own during lunch it's starting to make more
// sense to me
console.clear()

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

let posTotal1 = 0
let posTotal2 = 0


for (let num of numbers1){
    if (num > 0){
        posTotal1 += num
    }
}

for (let num of numbers2){
    if (num > 0){
        posTotal2 += num
    }
}

posNumsTotal = posTotal1 + posTotal2
console.log(posTotal1)
console.log(posTotal2)
console.log(posNumsTotal)