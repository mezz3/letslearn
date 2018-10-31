(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "จงตรวจสอบว่าผลสรุปต่อไปนี้สมเหตุสมผลหรือไม่ <br> เหตุ 1 ) กบทุกตัวว่ายน้ำได้ <br> 2 ) สัตว์ที่ว่ายน้ำได้ จะบินได้",
        answers: {
          a: "กบทุกตัวบินได้",
          b: "นกทุกตัวว่ายน้ำได้",
          c: "นกทุกตัวบินได้",
          d: "กบทุกตัวเดินได้"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
      },
      {
        question: "จงตรวจสอบว่าผลสรุปต่อไปนี้สมเหตุสมผลหรือไม่ <br> เหตุ 1 ) จำนวนนับทุกจำนวนเป็นจำนวนเต็ม <br> 2 ) จำนวนเต็มทุกจำนวนเป็นจำนวนจริง",
        answers: {
          a: "จำนวนจริงทุกจำนวนเป็นจำนวนเต็ม",
          b: "จำนวนเฉพาะทุกจำนวนเป็นจำนวนจริง",
          c: "จำนวนนับทุกจำนวนเป็นจำนวนจริง",
          d: "จำนวนจริงทุกจำนวนเป็นจำนวนเฉพาะ"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
      },
      {
        question: "จงตรวจสอบว่าผลสรุปต่อไปนี้สมเหตุสมผลหรือไม่ <br> เหตุ 1 ) คนที่มีสุขภาพดีทุกคนเป็นคนที่มีความสุข <br> 2 ) นาย ก มีความสุข",
        answers: {
          a: "นาย ก มีสุขภาพดี",
          b: "นาย ก มีสุขภาพไม่ดี",
          c: "นาย ก ไม่มีความสุข",
          d: "นาย ก เป็นคนดี"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
    
      },
      {
        question: "จงตรวจสอบว่าผลสรุปต่อไปนี้สมเหตุสมผลหรือไม่ <br> เหตุ 1 ) จำนวนเต็มที่หารด้วย 2 ลงตัว ทุกจำนวนเป็นจำนวนเต็มคู่ <br> 2 ) 7 หารด้วย 2 ลงตัว",
        answers: {
          a: "7 ไม่เป็นจำนวนคู่",
          b: "7 เป็นจำนวนคู่",
          c: "7 เป็นจำนวนคี่",
          d: "2 เป็นจำนวนคี่"
        },
        correctAnswer: "b",
        ans: "เฉลย b"
    
      },
      {
        question: "จงตรวจสอบว่าผลสรุปต่อไปนี้สมเหตุสมผลหรือไม่ <br> เหตุ 1 ) สุนัขบางตัวมีขนยาว <br> 2 ) มอมเป็นสุนัขของฉัน",
        answers: {
          a: "ดำเป็นสุนัขที่มีขนยาว",
          b: "มอมเป็นสุนัขที่มีไม่มีขน",
          c: "มอมเป็นสุนัขที่มีขนสั้น",
          d: "มอมเป็นสุนัขที่มีขนยาว"
        },
        correctAnswer: "d",
        ans: "เฉลย d"

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