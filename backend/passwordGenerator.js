const getNumber = document.getElementById('number');
const getUpper = document.getElementById('upperCase');
const getLower = document.getElementById('lowerCase');
const getSpecial = document.getElementById('special');
const generateButton = document.getElementById('generateButton');
const getClipboard = document.getElementById('clipboard');
const getResult = document.getElementById('result');
const length = 12;

const functions = {
    upper: generateUpperCase,
    lower: generateLowerCase,
    number: generateNumber,
    symbols: generateSymbol
};

generateButton.addEventListener('click', () => {
    const hasLower = getLower.checked;
    const hasUpper = getUpper.checked;
    const hasNumber = getNumber.checked;
    const hasSpecial = getSpecial.checked;

    getResult.innerText = passwordGenerator(lower, upper, number, symbols, length);
});

function passwordGenerator(lower, upper, number, symbols, length) {
    let passwordOutput = '';
    const total = lower + upper + number + symbols;
    passwordOutput = total;
    return passwordOutput;
}

function generatePassword(lower, upper, number, symbols, length) {
    let generate = '';
    const typesCount = lower + upper + number + symbols;
    const typesArr = [{ lower }, { upper }, { number }, { symbols }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generate += randomFunc[funcName]();
        });
    }

    const password = generate.slice(0, length);

    return password;
}

getClipboard.addEventListener('click', () => {
    const textarea = document.getElementById('textarea');
    const password = getResult.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
});

function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateSymbol() {
    const symbols = '!@#$%^&*(){}[]|?/,.`~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
