(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "7 , 10 , 13 , 16 , ... , x <br> ค่า x เท่ากับเท่าใด เมื่อ x เป็นพจน์ที่ 10",
        answers: {
          a: "31",
          b: "34",
          c: "37",
          d: "40"
        },
        correctAnswer: "b",
        ans: "เฉลย b"
      },
      {
        question: "( 2 + 5 + 8 + ... + 1997 ) - ( 1 + 4 + 7 + ... + 1996 ) = D <br> จงหาค่า D",
        answers: {
          a: "660",
          b: "662",
          c: "664",
          d: "666"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
      },
      {
        question: "3 , 9 , 15 , 21 , ... , 63 <br> 63 เป็นพจน์ที่เท่าไร",
        answers: {
          a: "พจนที่ 9",
          b: "พจนที่ 10",
          c: "พจนที่ 11",
          d: "พจนที่ 12"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
    
      },
      {
        question: "3 + 8 + 13 + 18 + ... + 33 = S <br> จงหาค่า S",
        answers: {
          a: "126",
          b: "131",
          c: "136",
          d: "141"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
    
      },
      {
        question: "ที่นั่งแถวแรกมี 20 ที่นั่ง แถวต่อ ๆ ไปเพิ่มที่นั่งอีกแถวละ 4 ที่นั่ง มีที่นั่งทั้งหมด 32 แถว แถวสุดท้ายมีที่นั่งกี่ที่นั่ง",
        answers: {
          a: "140",
          b: "144",
          c: "148",
          d: "152"
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