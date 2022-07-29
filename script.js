const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
let firstNum;
let nextNum;
let currentOperator;
let solution;

const firstNumCont = document.querySelector(".firstNum");
const secondNumCont = document.querySelector(".secondNum");

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function operate(a, oper, b) {
  if (oper === "+") {
    solution = add(a, b);
    return solution;
  } else if (oper === "-") {
    solution = subtract(a, b);
    return solution;
  } else if (oper === "*") {
    solution = multiply(a, b);
    return solution;
  } else if (oper === "/") {
    solution = divide(a, b);
    return solution;
  } else {
    return "ERROR";
  }
}

nums.forEach((num) => {
  num.addEventListener("click", () => {
    display.textContent += num.textContent;
  });
});

clear.addEventListener("click", () => {
  display.textContent = null;
  firstNum = null;
  nextNum = null;
  currentOperator = null;
  solution = null;
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstNum = display.textContent;
    display.textContent = null;
    currentOperator = operator.textContent;
    display.textContent = null;
    console.log(display.textContent);

    if (nextNum != null && firstNum != null) {
      display.textContent = operate(firstNum, currentOperator, nextNum);
    }
    display.textContent = solution;
  });
});

equals.addEventListener("click", () => {
  nextNum = display.textContent;

  display.textContent = operate(firstNum, currentOperator, nextNum);

  firstNum = display.textContent;
  nextNum = null;
  currentOperator = "";
});
