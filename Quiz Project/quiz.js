const data = [
  {
    id: 1,
    question: "Bu balıklardan hangisi aslında bir balıktır?",
    answers: [
      { answer: "Kılıçbalığı", isCorrect: true },
      { answer: "Deniz anası", isCorrect: false },
      { answer: "Denizyıldızı", isCorrect: false },
      { answer: "Kerevit", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Türkiye'nin en büyük futbol takımı?",
    answers: [
      { answer: "ts", isCorrect: false },
      { answer: "gs", isCorrect: false },
      { answer: "FENERBAHÇE", isCorrect: true },
      { answer: "bjk", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Hangi hayvanlardan bir grup uyanık olarak adlandırılır?",
    answers: [
      { answer: "Yarasalar", isCorrect: false },
      { answer: "Akbabalar", isCorrect: true },
      { answer: "Karıncalar", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};
play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "block";
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Doğru  Cevaplar: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Yanlış Cevaplar: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Skor: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
        <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
        
        `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target.value);
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Lütfen Bir Cevap Seçiniz!");
  });
};
showQuestion(qIndex);
submitAnswer();
