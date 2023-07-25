// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondsmallestnumber(points){
  const sortedarray=  points.sort(function(a, b){return a - b});
  return sortedarray[1]
}


const arr=[40, 100, 1, 5, 25, 10];

console.log(secondsmallestnumber(arr));