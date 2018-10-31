(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: " ( x<sup>2</sup> )<sup>3</sup> หมายถึงข้อใด",
        answers: {
          a: "x<sup>2</sup> + x<sup>2</sup> + x<sup>2</sup>",
          b: "x<sup>3</sup> + x<sup>3</sup>",
          c: "x<sup>2</sup> * x<sup>2</sup> * x<sup>2</sup>",
          d: "x<sup>3</sup> * x<sup>3</sup>"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
      },
      {
        question: " ( 7 x<sup>3</sup> )<sup>0</sup> แทนจำนวนใด โดยที่ x ≠ 0",
        answers: {
          a: "7",
          b: "7x<sup>3</sup>",
          c: "0",
          d: "1"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
      },
      {
        question: "4<sup>a</sup> เขียนให้อยู่ในรูปฐานที่เป็นที่สอง ได้เท่าไร",
        answers: {
          a: "2<sup>0</sup>",
          b: "2<sup>a</sup>",
          c: "2<sup>2a</sup>",
          d: "2<sup>3a</sup>"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
    
      },
      {
        question: "จำนวน 125<sup>2n</sup> มีค่าเท่ากับเท่าใด",
        answers: {
          a: "5<sup>4n</sup>",
          b: "5<sup>5n</sup>",
          c: "5<sup>6n</sup>",
          d: "5<sup>7n</sup>"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
    
      },
      {
        question: "2.30 x 10<sup>-10</sup> มีค่าเท่ากับข้อใด",
        answers: {
          a: "0.000000000023",
          b: "0.00000000023",
          c: "0.000000023",
          d: "0.00000023"
        },
        correctAnswer: "b",
        ans: "เฉลย b"

      }
    ];
    
function buildQuiz(){
    output = [];
    i = 1;
    myQuestions.forEach((currentQuestion, questionNumber) => {
    answers = [];
    for(letter in currentQuestion.answers){
        answers.push(`<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label><br>`
                    );
    }
    output.push(
        ` <div class="slide">
            <div class="question">${i}. <b> ${currentQuestion.question} </b></div>
            <div class="answers"> ${answers.join('')}</div>
            <div class ="ans"> </div>
        </div>
        `
    );
    i++;
    })
    quizContainer.innerHTML = output.join('');
}

function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');
    const ansContainers = quizContainer.querySelectorAll('.ans');
    let correct = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
        if(userAnswer == currentQuestion.correctAnswer){
            correct++;
            answerContainers[questionNumber].style.color = 'lightgreen';
            ansContainers[questionNumber].innerHTML = '';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
            ansContainers[questionNumber].innerHTML = currentQuestion.ans;
        }
    });
        resultsContainer.innerHTML = "คุณได้ " + correct + " คะแนน เต็ม " + myQuestions.length + " คะแนน";
        alert("คุณได้ " + correct + " คะแนน เต็ม " + myQuestions.length + " คะแนน");
    }

function showSlide(n) {

    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide == 0) {
        previousButton.style.display = "none";
    }
    else {
        previousButton.style.display = "inline-block";
    }
    
    if (currentSlide == slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    }
    else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

buildQuiz();
previousButton = document.getElementById("previous");
nextButton = document.getElementById("next");
slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(0);
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

})();