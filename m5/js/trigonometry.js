(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "กำหนดให้ sec x + tan x = A <br> ถ้า A ≠ 0 แล้วค่าของ cos x เท่ากับข้อใดต่อไปนี้",
        answers: {
          a: "2A",
          b: "( A<sup>2</sup> - 1 ) / ( A<sup>2</sup> + 1 )",
          c: "( A ) / ( A<sup>2</sup> + 1 )",
          d: "( 2A ) / ( A<sup>2</sup> + 1 )"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
      },
      {
        question: "- sin<sup>2</sup>1° + sin<sup>2</sup>2° - sin<sup>2</sup>3° + ... - sin<sup>2</sup>89° + sin<sup>2</sup>90° มีค่าเท่าใด",
        answers: {
          a: "0.5",
          b: "1.5",
          c: "2.5",
          d: "3.5"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
      },
      {
        question: "ให้ A เป็นเซตคำตอบของสมการ cos ( 2 arcsin x ) + 2 = 4 sin<sup>2</sup>( arccos x ) <br> ข้อใดต่อไปนี้คือผลคูณของสมาชิกในเซต A",
        answers: {
          a: "-1 / 4",
          b: "-1 / 2",
          c: "1 / 4",
          d: "1 / 2"
        },
        correctAnswer: "b",
        ans: "เฉลย b"
    
      },
      {
        question: "กำหนดให้ ABC เป็นรูปสามเหลี่ยมและ D เป็นจุดกึ่งกลางด้าน BC <br> ถ้า AB = 4 หน่วย AC = 3 หน่วย และ AD = 5 / 2 หน่วย <br> แล้วด้าน BC ยาวเท่ากับข้อใดต่อไปนี้",
        answers: {
          a: "3",
          b: "4",
          c: "5",
          d: "6"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
    
      },
      {
        question: "ในรูปสามเหลี่ยม ABC ถ้า A = 30° ด้าน BC ยาว 2 เซนติเมตร และ ด้าน AC ยาว 3 เซนติเมตร <br> แล้ว 4 sin 3B มีค่าเท่ากับเท่าใด",
        answers: {
          a: "1.25",
          b: "2.25",
          c: "3.25",
          d: "4.25"
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