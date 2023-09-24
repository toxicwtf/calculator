let display = document.querySelector('.display')
let num1 = 0;
let num2 = 0;
let generalOp;
let dark = document.querySelector('.Dark')
let buttonNum = document.querySelectorAll('.btn-num')
let buttonOperator = document.querySelectorAll('.btn-operator')
let zero = document.querySelector('#zero')
let resBtn = document.querySelector('#result')
let btnthree = document.querySelector('#three')

function numClick(num) {
    display.value = display.value + num
}

function opClick(op) {
    if (op == 'C') {
        display.value = ''
    }
    num1 = display.value;
    display.value = ''
    generalOp = op
    console.log(generalOp);
    console.log(num1);
}

function result() {
    if (generalOp == 'plus') {
        num2 = display.value;
        num1 = Number(num1)
        num2 = Number(num2)
        display.value = num1 + num2
    } else if (generalOp == 'menha') {
        num2 = display.value;
        num1 = Number(num1)
        num2 = Number(num2)
        display.value = num1 - num2
    } else if (generalOp == 'divide') {
        num2 = display.value;
        num1 = Number(num1)
        num2 = Number(num2)
        display.value = num1 / num2
    } else if (generalOp == 'times') {
        num2 = display.value;
        num1 = Number(num1)
        num2 = Number(num2)
        display.value = num1 * num2
    } else if (generalOp == 'Dtimes') {
        num2 = display.value;
        num1 = Number(num1)
        num2 = Number(num2)
        display.value = num1 ** num2
    } else if (generalOp == 'r') {
        num1 = Number(num1);
        var r = Math.sqrt(num1)
        display.value = r
    }
}

dark.addEventListener('click', () => {
    display.classList.toggle('dark-mode');
    document.querySelector('.card').classList.toggle('dark-mode');
    dark.classList.toggle('dark-mode');

    for (let i = 0; i <= buttonNum.length; i++) {
        buttonNum[i].classList.toggle('dark-mode');
        buttonOperator[i].classList.toggle('dark-mode');
    }
})


function Backspace() {
    var value = display.value
    display.value = value.substr(0, value.length - 1);
}