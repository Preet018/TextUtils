function copyToClipboard() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);

    if (inputValue === '') {
        return
    }
    navigator.clipboard.writeText(inputValue);
    alert("Text copied to clipboard!");
}

function clearText() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    inputElement.value = '';
    countWordsAndCharacters(inputValue);
}

function convertToUpperCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var upperCaseValue = inputValue.toUpperCase();
    inputElement.value = upperCaseValue;
}

function convertToLowerCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var lowerCaseValue = inputValue.toLowerCase();
    inputElement.value = lowerCaseValue;
}

function convertToPascalCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var pascalCaseValue = toPascalCase(inputValue);
    inputElement.value = pascalCaseValue;
    countWordsAndCharacters(inputValue);
}




function toPascalCase(inputValue) {
    var words = inputValue.split(/\s+/);
    var pascalCaseText = "";

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      pascalCaseText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return pascalCaseText;
}

function convertToCamelCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var camelCaseValue = toCamelCase(inputValue);
    inputElement.value = camelCaseValue;
    countWordsAndCharacters(inputValue);
}

function toCamelCase(inputValue) {
    return inputValue.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
}

function convertToSnakeCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var snakeCaseValue = toSnakeCase(inputValue);
    inputElement.value = snakeCaseValue;
    countWordsAndCharacters(inputValue);
}

function toSnakeCase(inputValue) {
    return inputValue.trim().replace(/\s+/g, '_').toLowerCase();
}

function convertToKebabCase() {
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    var snakeCaseValue = toKebabCase(inputValue);
    inputElement.value = snakeCaseValue;
    countWordsAndCharacters(inputValue);
}

function toKebabCase(inputValue) {
    return inputValue.trim().replace(/\s+/g, '-').toLowerCase();
}

function reverseText() {
    const inputElement = document.getElementById('textInput');
    const inputValue = inputElement.value;
    const outputValue = inputValue.split('').reverse().join('');
    inputElement.value = outputValue;
}

function removeSpace() {
    const inputElement = document.getElementById('textInput');
    const inputValue = inputElement.value;
    const outputValue = inputValue.replace(/\s+/g, '');
    inputElement.value = outputValue;
    countWordsAndCharacters(inputValue);
}

function removeExtraSpace() {
    const inputElement = document.getElementById('textInput');
    const inputValue = inputElement.value;
    const outputValue = inputValue.trim().replace(/\s+/g, ' ');
    inputElement.value = outputValue;
    countWordsAndCharacters(inputValue);
}
function countWordsAndCharacters() {
    var counterElement = document.getElementById('counter');
    var inputElement = document.getElementById('textInput');
    var inputValue = inputElement.value;
    
    var wordCount = inputValue.trim().split(/\s+/).length;
    var charCount = inputValue.length;

    if (inputValue.trim() === '') {
        if (inputValue === '') {
            counterElement.innerText = 'Words: 0, Characters: 0';
            return;    
        }
        counterElement.innerText = 'Words: 0, Characters: ' + charCount;
        return;
    }
    counterElement.innerText = 'Words: ' + wordCount + ', Characters: ' + charCount;
}