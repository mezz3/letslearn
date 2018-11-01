(function() {

    quizContainer = document.getElementById("quiz");
    resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");
    
    var myQuestions = [
      {
        question: "ข้อมูลชุดหนึ่งเป็นดังนี้ 5 , 5 , 5 , X , 8 , 8 , 8 , 15 , 15 และ 15 <br> ถ้าค่าเฉลี่ยของข้อมูลชุดนี้เท่ากับ 8.9 ฐานนิยมของข้อมูลชุดนี้เป็นเท่าไร",
        answers: {
          a: "5",
          b: "8",
          c: "5 , 8 , 15",
          d: "ไม่มีฐานนิยม"
        },
        correctAnswer: "a",
        ans: "เฉลย a"
      },
      {
        question: "มิ้นสอบได้คะแนนเฉลี่ยวิชาคณิตศาสตร์ 80 คะแนน จากการทดสอบ 9 ครั้ง และในการสอบครั้งที่ 10 สอบได้ 70 คะแนน <br> ค่าเฉลี่ยเลขคณิตทั้ง 10 ครั้งเท่ากับกี่คะแนน",
        answers: {
          a: "73",
          b: "75",
          c: "77",
          d: "79"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
      },
      {
        question: "ข้อมูลชุดหนึ่งเรียงค่าจากน้อยไปมากดังนี้ 3 , 3 , 3 , 3 , a , 5 , 5 , 5 , 6 , 6 , 6 , b <br> ถ้าฐานนิยมมี 2 ค่า และไม่เท่ากับ 6 ค่าเฉลี่ยเลขคณิตเท่ากับ 5 ค่าของ a และ b ตรงกับข้อใด",
        answers: {
          a: "a = 3 , b = 6",
          b: "a = 3 , b = 10",
          c: "a = 5 , b = 6",
          d: "a = 5 , b = 10"
        },
        correctAnswer: "d",
        ans: "เฉลย d"
    
      },
      {
        question: "กำหนดข้อมูล 6 , 4 , 2 , 7 , 9 , 2 ข้อใดไม่ถูกต้อง",
        answers: {
          a: "ค่าเฉลี่ยเลขคณิตเท่ากับ 5",
          b: "มัธยฐานเท่ากับ 5",
          c: "ฐานนยิมเท่ากับ 2",
          d: "ส่วนเบี่ยงเบนมาตรฐานเท่ากับ 1"
        },
        correctAnswer: "c",
        ans: "เฉลย c"
    
      },
      {
        question: "ข้อมูลชุดหนึ่งประกอบด้วย 4 , 9 , 4 , 13 , 10 , 10 , 6 , 4 , 22 , 12 <br> ข้อใดเรียงลำดับค่ากลางของข้อมูลจากน้อยไปหามากได้ถูกต้อง",
        answers: {
          a: "ค่าเฉลี่ยเลขคณิต , มัธยฐาน , ฐานนิยม",
          b: "มัธยฐาน , ฐานนิยม , ค่าเฉลี่ยเลขคณิต",
          c: "ฐานนิยม , ค่าเฉลี่ยเลขคณิต , มัธยฐาน",
          d: "ค่าเฉลี่ยเลขคณิต , ฐานนิยม , มัธยฐาน"
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