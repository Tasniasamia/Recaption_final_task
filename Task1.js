// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverse(str) {
    let stringword = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringword += str[i];
    }
    return stringword;
  }


  console.log(reverse("Hello World"))