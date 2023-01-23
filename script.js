const display = document.querySelector(".display");
display.textContent = 0;
const nums = document.querySelectorAll(".num");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
let firstNum = 0;

let nextNum;
let currentOperator;
let solution;
let operatorClickCounter = 0;
let displayValue = display.textContent;

const firstNumCont = document.querySelector(".firstNum");
const secondNumCont = document.querySelector(".secondNum");

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (b == "0") {
    return "ERROR";
  }
  let divSol = parseFloat(a) / parseFloat(b);
  divStr = divSol.toString();

  if (divStr.split(".")[1].length > 6) {
    return divSol.toFixed(6);
  } else {
    return divSol;
  }
}

// if havent calculated anything yet, operator just operates
// if already calculated something, then the operator displays the new result

function operate(oper, num1, num2) {
  if (oper == "+") {
    return add(num1, num2);
  } else if (oper == "-") {
    return subtract(num1, num2);
  } else if (oper == "*") {
    return multiply(num1, num2);
  } else if (oper == "/") {
    return divide(num1, num2);
  } else {
    return "ERROR";
  }
}

// if 0 is shown, typing numbers displays those numbers and replaces the 0
// otherwise, typing the numbers is appended to the number that is already there
nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (display.textContent == 0 || operatorClickCounter >= 1) {
      display.textContent = num.textContent;
    } else {
      display.textContent += num.textContent;
    }
  });
});

// when you click an operator, that operator is stored in currentOperator
// the first number is saved and the display is cleared
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorClickCounter++;
    if (operatorClickCounter >= 2) {
      nextNum = parseFloat(display.textContent);
      solution = operate(currentOperator, firstNum, nextNum);
      display.textContent = solution;
      nextNum = null;
      firstNum = solution;
      currentOperator = operator.textContent;
      operatorClickCounter = 1;
    } else {
      currentOperator = operator.textContent;
      firstNum = parseFloat(display.textContent);
      display.textContent = "";
    }
  });
});

// when you click equals, the number shown is saved to nextNum
// the solution is obtained by operating the two numbers with the operator
equals.addEventListener("click", () => {
  nextNum = parseFloat(display.textContent);
  solution = operate(currentOperator, firstNum, nextNum);
  display.textContent = solution;
  nextNum = null;
  operatorClickCounter = 0;
});

clear.addEventListener("click", () => {
  display.textContent = 0;
  firstNum = 0;
  nextNum = null;
  currentOperator = null;
  solution = null;
  operatorClickCounter = 0;
});
