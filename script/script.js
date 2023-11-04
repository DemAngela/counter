// плюсы и минусы

let a = 0;
let b = 0;
let c = '';

const refs =  {
    btnMinus: document.getElementById('MinusO'),
    btnPlus: document.getElementById('PlusO'),
    spanOne: document.getElementById('sOne'),
    twoMinus: document.getElementById('MinusT'),
    twoPlus: document.getElementById('PlusT'),
    spanTwo: document.getElementById('sTwo'),
    Multiplication: document.getElementById('multi'),
    Clean: document.getElementById('clean'),
    result: document.getElementById('result'),
    myAlert: document.getElementById('alert'),
    alertBtn: document.getElementById('alertBtn')
}

refs.btnMinus.addEventListener('click', oneMinus);
refs.btnPlus.addEventListener('click', onePlus);
refs.twoMinus.addEventListener('click', minusTwo);
refs.twoPlus.addEventListener('click', plusTwo);
refs.Multiplication.addEventListener('click', multi);
refs.Clean.addEventListener('click', empty);
refs.alertBtn.addEventListener('click', alertClose);

//первоя строка
function oneMinus() {
    a -= 1;
    refs.spanOne.textContent = a
}

function onePlus() {
    a += 1;
    refs.spanOne.textContent = a
}

//вторая строка
function minusTwo() {
    b -= 1;
    refs.spanTwo.textContent = b
}

function plusTwo() {
    b += 1;
    refs.spanTwo.textContent = b
}

//умножение

function multi() {
    if ( a === 0 || b === 0 ) {
        refs.myAlert.classList.add('open')
    } else {
        let c = a * b;
        refs.result.textContent = c;
    }

}

function empty() {
    a = 0;
    b = 0;
    refs.spanOne.textContent = a;
    refs.spanTwo.textContent = b;
    refs.result.textContent = c;
}

function alertClose() {
    refs.myAlert.classList.remove('open')
    return empty()
}


