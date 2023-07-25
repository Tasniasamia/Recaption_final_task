// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


function sum(arr,num){
    let number=0;
    let index1;
    let index2;

    for(let i=0;i<arr.length;i++){
        if((arr[i]+arr[i-1])===num){
            number+= num;
            index1=i-1;
            index2=i;

        }
    }

    return [index1,index2];
}
const arr=[1, 3, 6, 8, 11, 15]

console.log(sum(arr,14))