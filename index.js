var firstNumber = "";
var secondNumber = "";
var operator = "";

// Function to append numbers to the input
function append(num) {
  let input = document.querySelector("input");
  if (operator === "") {
    // Append number to the first number if no operator is set
    firstNumber += num;
    input.value = firstNumber;
  } else {
    // Append number to the second number if an operator is set
    secondNumber += num;
    input.value += num;
  }
}

// Function to set the operator and update display
function setOperator(op) {
  if (firstNumber === "") return; // Do nothing if no first number is entered
  operator = op;
  document.querySelector("input").value += " " + op + " ";
}

// Function to perform the calculation
function calculate() {
  if (firstNumber === "" || secondNumber === "" || operator === "") return; // Do nothing if any value is missing
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "x":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      result = "Error";
  }
  document.querySelector("input").value = result;

  // Reset variables after calculation
  firstNumber = result;
  secondNumber = "";
  operator = "";
}

// Function to clear the input
function clearInput() {
  document.querySelector("input").value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}





// const body=document.querySelector('body');
// const bottom=document.querySelector('button');

// const color=['red', 'blue', 'black', 'pink', 'yellow', 'voilet', 'whitesmoke'];
// body.style.backgroundColor='orange';
// button.addEventListener ('click') ,function()  {
//     const colorIndex=parseInt(Math.random()*color.length);
//     body.style.backgroundColor=color[colorIndex];
     

// }