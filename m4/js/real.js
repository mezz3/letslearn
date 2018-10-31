(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "เซตในข้อใดต่อไปนี้เป็นเซตคำตอบของสมการ 9 x<sup>3</sup> + 12 x<sup>2</sup> + x - 2 = 0",
        answers: {
          a: "{ -2 , 1 / 3 , 3 / 2 }",
          b: "{ -1 , -2 / 3 , 1 / 2 }",
          c: "{ -1 , 1 / 3 , 2 / 3 }",
          d: "{ -1 , -2 / 3 , 1 / 3 }"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
      },
      {
        question: "กำหนดให้ A = { x | x<sup>2</sup> + 2x - 3 < 0 } และ B = { x | x + 1 >= 2 | x | } <br> ถ้า A - B = ( a , b ) แล้ว 3 | a + b | มีค่าเท่าใด",
        answers: {
          a: "10",
          b: "-10",
          c: "0",
          d: "9"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
      },
      {
        question: "ถ้าเซตคำตอบของอสมการ | x<sup>2</sup> + x - 2 | < ( x + 2 ) คือช่วง ( a , b ) แล้ว a + b มีค่าเท่ากับเท่าใด",
        answers: {
          a: "1",
          b: "2",
          c: "4",
          d: "6"
        },
        correctAnswer: "b",
        ans: "เฉลย b"
    
      },
      {
        question: "กำหนดให้ p( x ) เป็นพหุนามดีกรี 3 เมื่อหารด้วย x - 1 , x - 2 , x - 3 จะเหลือเศษ 1 และ p( 4 ) = 0 จงหาค่าของ p( 5 )",
        answers: {
          a: "-1",
          b: "2",
          c: "-3",
          d: "4"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
    
      },
      {
        question: "ถ้า a และ b เป็นผลเฉลยของอสมการ || 2x | -1 | <= x + 5 แล้ว a - b มีค่าสูงสุดเท่าใด",
        answers: {
          a: "8",
          b: "10",
          c: "16",
          d: "-8"
        },
        correctAnswer: "a",
        ans: "เฉลย a"

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