const calculator = document.querySelectorAll('[data-calcu="calculator"] button');
const operations = ['+', '-', '*', '/', '=', 'clear'];
let num1 = document.querySelector('[data-calcu="num1"]');
let num2 = document.querySelector('[data-calcu="num2"]');
let operation = document.querySelector('[data-calcu="operation"]');
let answer = document.querySelector('[data-calcu="answer"]');

calculator.forEach((el) => {
    el.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (operations.includes(value)) {
            executeOperation(value);
            return;
        }

        if (operation.innerText == '') {
            num1.innerText += value;
        } else {
            num2.innerText += value;
        }
    })
});

function executeOperation(val) {
    if (val == 'clear') {
        num1.innerText = '';
        num2.innerText = '';
        operation.innerText = '';
        answer.innerText = 'Answer is:';
        return;
    }

    if (val != '=') {
        operation.innerText = val;
    }

    let parseNum1 = parseInt(num1.innerText);
    let parseNum2 = parseInt(num2.innerText);
    let answerData = 0;

    switch (operation.innerText) {
        case '+':
            answerData = parseNum1 + parseNum2;
            break;
        case '-':
            answerData = parseNum1 - parseNum2;
            break;
        case '*':
            answerData = parseNum1 * parseNum2;
            break;
        case '/':
            answerData = parseNum1 / parseNum2;
            break;
    }

    if (val == '=') {
        answer.innerText = answerData;
    }
    

}