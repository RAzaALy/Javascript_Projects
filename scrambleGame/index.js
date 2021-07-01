//j$
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWord = "";
let randomWords = "";

let words = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'scss', 'react', 'angular', 'swift', 'ruby', 'mysql', 'android', 'jquery', 'bootstrap', 'github', 'kotlin', 'pearl'];

const createWords = () => {
    let random = Math.floor(Math.random() * words.length);
    // console.log(random);
    let tempWord = words[random];
    // console.log(tempWord.split(""));
    return tempWord;
}
const scrambleWord = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        // console.log(i);
        // console.log(j);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWord = createWords();
        randomWords = scrambleWord(newWord.split("")).join("");
        // console.log(randomWords);
        msg.innerHTML = `Guess The Word : <span>${randomWords}</span>`;
    } else {
        let guessWord = guess.value;
        if (guessWord === newWord) {
            play = false;
            msg.innerHTML = `Great Job! <span>${newWord}</span>`;
            // console.log('correct');
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            // console.log('Incorrect');
            msg.innerHTML = `Incorrect Plz Try Again! <span>${randomWords}</span>`;
        }

    }
});