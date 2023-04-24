function addition(x, y) {
    console.log(x + y);
  }


  function subtract(x, y) {
    console.log(x - y);
  }


  
  function multiplication(x, y) {
    console.log(x * y);
  }


  function division(x, y) {
    console.log(x / y);
  }

// How to create the area for user input
let firstNum = parseInt(prompt("Insert a number please"));
console.log(firstNum, typeof firstNum,);

let operator = prompt("Choose operation (+, -, *, /)");
let secondNum = parseInt(prompt("insert second number"));

// How to add the variables
if (operator === "+"){
addition (firstNum, secondNum)
result = firstNum + secondNum;
} 

// How to subtract the variables
else if (operator === "-") {
subtraction (firstNum, secondNum)
result = firstNum - secondNum;
}

// How to multiply the variables
else if (operator === "*"){
multiplication (firstNum, secondNum)
result = firstNum * secondNum;
}

// How to divide the variables
else if (operator === "/"){
division (firstNum, secondNum)
result = firstNum/secondNum;
}

// The output
console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);

