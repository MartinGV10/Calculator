const baseValue = 0
let operations = ['+', '-', '*', '/']

const display = document.querySelector('.display')

// reset calc display to 0
const ac = document.querySelector('.reset')

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function mult(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

const plus = document.querySelector('.plus')
plus.addEventListener('click', () => {

})


// function getNum1() {
//     let num1 = []
//     let num1Click = false
//     let thing
//     const button1 = document.querySelectorAll('.num')
//     button1.forEach(btn => {
//         btn.addEventListener('click', () => {
//             num1Click = true
//             num1.push(btn.textContent)
//             let piss = num1.join('')
//             parseInt(piss)
//             display.textContent = piss
//             // console.log(num1.join(''))
//         })
//     });
//     thing = display.textContent
//     return thing
// }

// console.log(getNum1())
// console.log(num1)



// plans
// to get two numbers with an operation, make an array with the entire thing
// --> [3, 4, 2, 1, +, 3, 2, 1]
// when equals is pressed, combine the array using .join and get the combined number of each side of the operation
// create conditional to check operation and perform accordingly

// function operate() {
//     let number = []
//     const button1 = document.querySelectorAll('.num')
//     button1.forEach(btn => {
//         btn.addEventListener('click', () => {
//             num1.push(btn.textContent)
//             let piss = num1.join('')
//             parseInt(piss)
//             display.textContent = piss
//             // console.log(num1.join(''))
//         })
//     });
//     thing = display.textContent
//     return thing

// }

function operate() {
    let number = []
    const btn1 = document.querySelectorAll('.num, .operation')
    let num1
    let num2
    let op
    let sol
    let equals = document.querySelector('.equal')
    btn1.forEach(btn => {
        btn.addEventListener('click', () => {
            number.push(btn.textContent)
            let piss = number.join('')
            display.textContent = piss
            console.log(piss)
            equals.addEventListener('click', () => {
                const opIdx = piss.indexOf('+')
                num1 = piss.slice(0, opIdx)
                num2 = piss.slice(opIdx + 1)
                console.log(num1, num2)
            })
            
        })
    })

    ac.addEventListener('click', () => {
        display.textContent = baseValue
        number = []
    })

    return number
}

operate()