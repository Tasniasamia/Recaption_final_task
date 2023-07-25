// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {

    const frequency = {};
  
 
    for (const element of arr) {
      if (frequency[element]) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
    }
  

    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in frequency) {
      if (frequency[element] > maxFrequency) {
        mostFrequentElement = element;
        maxFrequency = frequency[element];
      }
    }
  
    return mostFrequentElement;
  }


  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5] ;

console.log(findMostFrequentElement(array));