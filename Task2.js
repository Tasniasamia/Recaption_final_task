// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function positivesum(arr){
let sum=0;
    for(let i of arr){
        if(i>0){
            sum=sum+i;
        }
    }
return sum;
}


const arr=[2, -5, 10, -3, 7];
console.log(positivesum(arr));