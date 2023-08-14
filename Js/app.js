// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".bttns .quit");
const continue_btn = document.querySelector(".bttns .restart");
const quiz_box = document.querySelector(".quiz_box");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = document.querySelector(".result_box .bttns  .restart");
const quit_quiz = document.querySelector(".result_box .bttns .quit");
const que_text = document.querySelector(".que_text");
const timeCount = document.querySelector(".timer_sec");
const time_line = document.querySelector(".time_line");
const time_text = document.querySelector(".time_text");
console.log(quit_quiz);

const option_list = document.querySelector(".option_list");

// If Start Quiz Button clicked
start_btn.addEventListener("click", () => {
  info_box.classList.add("activeInfo"); // show the info box
});

// If Exit Button clicked
exit_btn.addEventListener("click", () => {
  info_box.classList.remove("activeInfo"); // hide the info box
});

// If continue Button clicked
continue_btn.addEventListener("click", () => {
  info_box.classList.remove("activeInfo"); // hide the info box
  quiz_box.classList.add("activeQuiz"); // show the quiz box
  showQuestions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
});

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timerValue = 15;
let widthValue = 0;
let userScore = 0;

// If Next Button clicked
next_btn.addEventListener("click", () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timerValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
  } else {
    showResultBox();
    clearInterval(counter);
    startTimer(timerValue);
    startTimerLine(widthValue);
    console.log("Questions Completed");
  }
});

// if restartQuiz button clicked
restart_quiz.addEventListener("click", () => {
  quiz_box.classList.add("activeQuiz"); // show the quiz box
  result_box.classList.remove("activeResult"); // hide result box

  que_count = 0;
  que_numb = 1;
  timerValue = 15;
  widthValue = 0;
  userScore = 0;
  showQuestions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timerValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  time_text.innerHTML = "Time Left";
  next_btn.style.display = "none"; //hide the next button
});

// if quitQuiz button clicked
quit_quiz.addEventListener("click", () => {
  console.log("Clicked");
  window.location.reload(); //reload the current window
});

// Getting questions and options from an array
const showQuestions = (index) => {
  let que_tag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
  let options = `<div class="option"><span>${questions[index].options[0]}</span></div>
                    <div class="option"><span>${questions[index].options[1]}</span></div>
                    <div class="option"><span>${questions[index].options[2]}</span></div>
                    <div class="option"><span>${questions[index].options[3]}</span></div>`;
  que_text.innerHTML = que_tag;
  option_list.innerHTML = options;
  const option = document.querySelectorAll(".option");
  option.forEach((x) => {
    x.setAttribute("onClick", "optionSelected(this)");
  });
};

const tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
const crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

const optionSelected = (answer) => {
  clearInterval(counter);
  clearInterval(counterLine);
  //   console.log(answer.children[0].innerHTML); //Method 1: by this method can get the value of option
  //   console.log(answer.textContent); //Method 2: by this method can get the value of option
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  // Convert the NodeList to an array
  const optionArray = [...option_list.children];

  if (userAns == correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    console.log("Answer is correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    // if answer is incorrect then automatically select the correct answer
    optionArray.forEach((x) => {
      console.log(x);
      if (x.textContent == correctAns) {
        x.setAttribute("class", "option correct");
        x.insertAdjacentHTML("beforeend", tickIcon);
      }
    });
  }

  // Once user selected disabled all options
  /* Methode 1 to disabled all the option */

  // let allOption = option_list.children.length;
  //   for (let i = 0; i < allOption; i++) {
  //     console.log(option_list);
  //     option_list.children[i].classList.add("disabled");
  //   }

  /* Methode 2 to disabled all the option */
  optionArray.forEach((option) => {
    option.classList.add("disabled");
  });
  next_btn.style.display = "block";
};

const showResultBox = () => {
  info_box.classList.remove("activeInfo"); // hide the info box
  quiz_box.classList.remove("activeQuiz"); // hide the quiz box
  result_box.classList.add("activeResult"); // show the quiz box
  const scoreText = document.querySelector(".score_text");
  if (userScore > 3) {
    let scoreTag = `<span>and congrats!, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag = `<span>and nice🥰!, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag = `<span>and sorry, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  }
};

const startTimer = (time) => {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      timeCount.textContent = `0${timeCount.textContent}`;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      time_text.innerHTML = "Time Off";

      const optionArray = [...option_list.children];
      let correctAns = questions[que_count].answer;

      optionArray.forEach((x) => {
        console.log(x);
        if (x.textContent == correctAns) {
          x.setAttribute("class", "option correct");
          x.insertAdjacentHTML("beforeend", tickIcon);
        }
      });

      optionArray.forEach((option) => {
        option.classList.add("disabled");
      });
      next_btn.style.display = "block";
    }
  }
};

const startTimerLine = (time) => {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = `${time}px`;
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
};

const queCounter = (index) => {
  const bottom_que_counter = document.querySelector(".total_que");
  let totalQuesCountTag = `<span><p>${index}</p> of <p>${questions.length}</p>Questions</span>`;
  bottom_que_counter.innerHTML = totalQuesCountTag;
};
