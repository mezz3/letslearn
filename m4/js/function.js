(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "ให้ f { ( 1 , 2 ) , ( 3 , 4 ) , ( 5 , 6 ) , ( 7 , 8 ) } และ g { ( 1 , 2 ) , ( 2 , 1 ) , ( 3 , 4 ) , ( 4 , 3 ) , ( 5 , 6 ) , ( 6 , 5 ) } <br><br> ข้อใดต่อไปนี้มีค่าเท่ากับ g∘f",
        answers: {
          a: "{ ( 2 , 2 ) , ( 4 , 4 ) , ( 6 , 6 ) }",
          b: "{ ( 1 , 1 ) , ( 3 , 3 ) , ( 5 , 5 ) }",
          c: "{ ( 1 , 1 ) , ( 3 , 3 ) , ( 5 , 5 ) }",
          d: "{ ( 0 , 0 ) }"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
      },
      {
        question: " ให้ f( x ) = 2x + 1 และ g( x ) = x<sup>2</sup> + 3x + 1 ข้อใดต่อไปนี้มีค่าเท่ากับ g∘f( x )",
        answers: {
          a: "2x<sup>2</sup> + 6x + 3",
          b: "4x<sup>2</sup> + 10x + 5",
          c: "2x<sup>3</sup> + 7x<sup>2</sup> + 5x + 1",
          d: "x<sup>2</sup> + 5x + 2"
        },
        correctAnswer: "b",
        ans: "เฉลย b"
      },
      {
        question: "ให้ f { ( 1 , 2 ) , ( 3 , 4 ) , ( 5 , 6 ) , ( 7 , 8 ) } และ g { ( 1 , 2 ) , ( 4 , 3 ) , ( 5 , 6 ) , ( 8 , 7 ) } <br> ข้อใดต่อไปนี้มีค่าเท่ากับ f<sup>-1</sup>∘g( -5 ) + g<sup>-1</sup>∘f( 1 )",
        answers: {
          a: "-4",
          b: "-2",
          c: "2",
          d: "4"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
    
      },
      {
        question: "ให้ g( x ) = 3x - 2 และ g∘f( x ) = 2x - 3 และ f เป็นฟังก์ชันหนึ่งต่อหนึ่ง ข้อใดต่อไปนี้มีค่าเท่ากับ f<sup>-1</sup>( 1 )",
        answers: {
          a: "-1",
          b: "0",
          c: "1",
          d: "2"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
    
      },
      {
        question: "ให้ g( x ) = 2x<sup>2</sup> + 3 และ g∘f( x ) = 3x<sup>2</sup> + 2 ข้อใดต่อไปนี้มีค่าเท่ากับค่า f( -1 )",
        answers: {
          a: "-1",
          b: "0",
          c: "1",
          d: "2"
        },
        correctAnswer: "c",
        ans: "เฉลย c"

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