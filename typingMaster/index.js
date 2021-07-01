//apply j$
const sentence = [
  "A quick brown fox jumps over the lazy dog."
  ,
  "Two common terms used to describe a salesperson are Farmer and Hunter. The reality is that most professional salespeople have a little of both.",
  "In terms of sales methodology,a hunter refers to a person whose focus is on bringing in and closing deals. This process is called sales capturing.",
  "An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson. Their job is to find and convert buyers.",
  "A hunter is often associated with aggressive personalities who use aggressive sales technique.A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process.",
  ,
  "Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator",
  "More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated language localization. Ideally, the translator must know both languages, as well as the subject that is to be translated.",
  "A data entry clerk is a member of staff employed to enter or update data into a computer system. Data is often entered into a computer from paper documents using a keyboard.",
  "The keyboards used can often have special keys and multiple colors to help in the task and speed up the work. Proper ergonomics at the workstation is a common topic considered.",
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("words");
const btn = document.getElementById("btn");
let startTime, endTime;

let playGame = () => {
  let random = Math.floor(Math.random() * sentence.length);
  // console.log(random);
  // msg.innerText = sentence[random];
  msg.innerText = sentence[0]
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "DONE";
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  // console.log(response);
  return response;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  
  words1.forEach((item, index) => {
    if (item == words2[index]) {
      count++;
    }
  });

  let errorWords = words1.length - count;
  return `Total Words : ${words1.length}\nCorrect Words : ${count} \n Error Words : ${errorWords}`;
};
let endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = Math.floor((endTime - startTime) / 1000);
  // console.log(totalTime);
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  if (speed >= 40) {
    var finalMsg =
      "Congratulations your speed is Excellent!!! \nYour typing speed is " +
      speed +
      " words per minute.\n";
  } else {
    var finalMsg = "Your typing speed is " + speed + " words per minute.\n";
  }
  // let finalMsg = alert("You typed total at " + speed + " words per minutes ");
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = alert(finalMsg);
  typeWords.value = "";
  msg.innerText = "";
};


typeWords.disabled = true;

btn.addEventListener("click", function (e) {
  if (this.innerText == "START") {
    typeWords.disabled = false;
    playGame();
    typeWords.focus();
  } else if (this.innerText == "DONE") {
    typeWords.disabled = true;
    btn.innerText = "START";
    endPlay();
  }
});
