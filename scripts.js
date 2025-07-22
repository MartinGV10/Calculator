// const baseValue = 0
// let operations = ['+', '-', '*', '/']

// const display = document.querySelector('.display')

// // reset calc display to 0
// const ac = document.querySelector('.reset')

// function add(x, y) {
//     return x + y
// }

// function subtract(x, y) {
//     return x - y
// }

// function multiply(x, y) {
//     return x * y
// }

// function divide(x, y) {
//     return x / y
// }

// // plans
// // to get two numbers with an operation, make an array with the entire thing
// // --> [3, 4, 2, 1, +, 3, 2, 1]
// // when equals is pressed, combine the array using .join and get the combined number of each side of the operation
// // create conditional to check operation and perform accordingly


// function operate() {
//     let number = []
//     const btn1 = document.querySelectorAll('.num, .operation')
//     let num1 = null
//     let num2 = null
//     let sol = null
    
//     let equals = document.querySelector('.equal')
//     btn1.forEach(btn => {
//         btn.addEventListener('click', () => {
//             number.push(btn.textContent)
//             let piss = number.join('')
//             display.textContent = piss
//             console.log(piss)
//             const opIndex = piss.search(/[+\-*/%^]/)
//             equals.addEventListener('click', () => {
//                 if (opIndex !== -1) {
//                     if (sol !== null) {
//                         num1 = sol
//                     }

//                     num1 = piss.slice('', opIndex)
//                     num2 = piss.slice(opIndex + 1)
//                     num1 = parseInt(num1)
//                     num2 = parseInt(num2)
//                     console.log('Num1: ' + num1)
//                     console.log('Num2: ' + num2)
//                     //get operator case
//                     console.log('The operator is: ' + piss[opIndex])
//                     if (piss[opIndex] == '+') {
//                         sol = add(num1, num2)
//                     }

//                     else if (piss[opIndex] == '-') {
//                         sol = subtract(num1, num2)
//                     }
                    
//                     else if (piss[opIndex] == '*') {
//                         sol = multiply(num1, num2)
//                     }

//                     else if (piss[opIndex] == '/') {
//                         sol = divide(num1, num2).toFixed(4)
//                     }
                    
//                 }
//                 display.textContent = sol
//                 console.log('Answer ==> ' + sol)

//                 number = []
//                 num1 = sol
//                 console.log('This is new num1: ' + num1) 
//             })
            
            
//         })
//     })

//     ac.addEventListener('click', () => {
//         display.textContent = baseValue
//         number = []
//         num1 = null
//         num2 = null
//         sol = null
//     })

//     return number
// }

// operate()













// ----- working version
//ai changes
// 1. Made a separate function to update display
// 2. Moved the equals even listener outside of the for each (creates a single instance of an equals instead of making new calls every time a button is pressed)
// 3. Conditional to check for a previous solution in memory

const baseValue = 0;
const display = document.querySelector('.display');
const ac = document.querySelector('.reset');
const equals = document.querySelector('.equal');
const btns = document.querySelectorAll('.num, .operation');

let number = [];
let num1 = null;
let num2 = null;
let sol = null;

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function updateDisplay(value) {
  display.textContent = value;
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    number.push(btn.textContent);
    updateDisplay(number.join(''));
  });
});

equals.addEventListener('click', () => {
  const input = number.join('');
  const opIndex = input.search(/[+\-*/]/);

  if (opIndex !== -1) {
    const op = input[opIndex];

    // Use previous result as num1 if available
    let left = sol !== null ? sol : parseFloat(input.slice(0, opIndex));
    let right = parseFloat(input.slice(opIndex + 1));

    switch (op) {
      case '+': sol = add(left, right); break;
      case '-': sol = subtract(left, right); break;
      case '*': sol = multiply(left, right); break;
      case '/': sol = divide(left, right); break;
    }

    sol = parseFloat(sol.toFixed(4));
    num1 = sol;
    updateDisplay(sol);
    console.log('Answer ==> ' + sol);

    number = []; // Reset input buffer for next expression
  }
});

ac.addEventListener('click', () => {
  number = [];
  num1 = null;
  num2 = null;
  sol = null;
  updateDisplay(baseValue);
});
