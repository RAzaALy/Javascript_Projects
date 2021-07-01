const result = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

//object of random function:
const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
//Define the following functions:
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()_{}?/,.:;"[]';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol());

//clipboard functionality to copy the password:
clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = result.innerText;

  if (!password) {
    return null;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password is copied to clipboard");
});

//add event on generate button:
generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  // console.log(length);
  const lower = lowercase.checked;
  const upper = uppercase.checked;
  const number = numbers.checked;
  const symbol = symbols.checked;
  //   console.log(lower, upper, number, symbol);
  result.innerText = generatePassword(lower, upper, number, symbol, length);
});

//function to generate password:
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  // console.log(typesCount);
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  //   console.log(typeArr);
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      //   console.log(type);
      const funName = Object.keys(type)[0];
      // console.log(funName);
      generatedPassword += randomFun[funName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
