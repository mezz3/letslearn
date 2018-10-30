(function() {

quizContainer = document.getElementById("quiz");
resultsContainer = document.getElementById("results");
submitButton = document.getElementById("submit");

var myQuestions = [
  {
    question: "เซตของจำนวนนับที่หารลงตัวด้วย 3 แต่มีค่าไม่เกิน 30 คือข้อใด ",
    answers: {
      a: "{..., -12, -9, -6, -3,0,1, 2,...,30 }",
      b: "{0,3,6,...,30}",
      c: "{3,6,..., 27}",
      d: "{3,6,...,30}"
    },
    correctAnswer: "d",
    ans: "เฉลย 4 (เนื่องจากจำนวนนับคือจำนวนเต็มบวกและจำนวนเต็มบวกที่หารด้วย 3 ลงตัวแต่ไม่เกิน 30 คือ 3, 6, 9, ...,30 ในขณะที่ตัวเลือกที่ 1 และ 2 มี 0 เป็นสมาชิกโดยที่ 0 ไม่ใช่จำนวนนับ และตัวเลือกที่ 3 ไม่มี 30)"
  },
  {
    question: "เซตของจำนวนนับที่สอดคล้องกับสมการ (x-1)(x+1)(x-2)(x+3) = 0 คือข้อใด ",
    answers: {
      a: "{-1,1}",
      b: "{1, 2}",
      c: "{1, 2, 3} ",
      d: "{-3, -1,1, 2}"
    },
    correctAnswer: "b",
    ans: "เฉลย 2  (ค่า x ที่สอดคล้องกับสมการ (x-1)(x+1)(x-2)(x+3) = 0 คือ x = -3, -1,1, 2 แต่ -3 และ -1 ไม่ใช่จำนวนนับ จึงเหลือค่า x ที่เป็นจำนวนนับคือ x=1, 2 เท่านั้น)"
  },
  {
    question: "กำหนดให้ A = {2, 4, {4,5 }} จงพิจารณาว่าข้อความใดต่อไปนี้ไม่ถูกต้อง",
    answers: {
      a: "{4,5} ∈ A ",
      b: "4 ∈ A",
      c: "{{4, 5}} ∈ A",
      d: "5 € A"
    },
    correctAnswer: "c",
    ans: "เฉลย 3  (จาก A = {2, 4, {4,5}} เราจะเห็นได้ว่า A มี 3 สมาชิกคือ 2, 4 และ {4,5} เมื่อนักเรียนสามารถหา สมาชิกทั้ง 3 ตัวของ A ได้ ก็จะทราบได้ทันทีว่า {{4,5}} นั้นไม่เป็นสมาชิกของ A)"

  },
  {
    question: "กำหนดให้ A = {1, 2, 1, 2 {} } จงพิจารณาว่าข้อความใดต่อไปนี้ไม่ถูกต้อง",
    answers: {
      a: "{1,2} ∈ A ",
      b: "2 ∈ A",
      c: "{{1, 2}} ∈ A",
      d: "1 ∈ A"
    },
    correctAnswer: "c",
    ans: "เฉลย 3"

  },
  {
    question: "ให้ A = {1, 2} ข้อใดต่อไปนี้ไม่ถูกต้อง ",
    answers: {
      a: "A มีสับเซตทั้งหมด 4 เซต ",
      b: "{1} ⊂ A ",
      c: "A ⊂ {1,2,3}",
      d: "{12} ⊂ A"
    },
    correctAnswer: "d",
    ans: "เฉลย 4"

  },
  {
    question: "ให้ A = {0,1,{1}} ข้อใดต่อไปนี้ไม่ถูกต้อง",
    answers: {
      a: "P(A)มีจำนวนสมาชิก 8 สมาชิก  ",
      b: "{0,1} เป็นสับเซตแท้ของ A ",
      c: "{1} ∈ P(A)",
      d: "{{1}, ∅} ∈ P(A)"
    },
    correctAnswer: "d",
    ans: "เฉลย 4"

  },
  {
    question: "ให้ A = {1, 2,12} ข้อใดต่อไปนี้ไม่ถูกต้อง",
    answers: {
      a: "A มีสับเซตแท้ 7 เซต",
      b: "{1, 2} ∈ P(A)",
      c: "{12} ∈ P(A)",
      d: "{{1, 2},{12}} ∈ P(A)"
    },
    correctAnswer: "d",
    ans: "เฉลย 4"

  },
  {
    question: "ให้ A = {x|(x-1)(x-2)(x-12) } และ B = {1, 2} ข้อใดต่อไปนี้ถูกต้อง <br>ก. A = B<br>ข. A มีจำนวนสมาชิกเท่ากับ B",
    answers: {
      a: "ก ถูก ข ถูก ",
      b: "ก ถูก ข ผิด ",
      c: "ก ผิด ข ถูก ",
      d: "ก ผิด ข ผิด"
    },
    correctAnswer: "d",
    ans: "เฉลย 4 เพราะว่า A = {1, 2,12} ดังนั้น A มี 3 สมาชิก และ Aไม่เท่ากับB  ดังนั้นข้อที่ถูกต้องคือข้อ4"

  },
  {
    question: "ข้อใดต่อไปนี้ถูกต้อง<br>ก. {1, 2,3,4} = {4,4,3,2,1} <br>ข.{1, 2, 3} = {123}",
    answers: {
      a: "ก ถูก ข ถูก ",
      b: "ก ถูก ข ผิด ",
      c: "ก ผิด ข ถูก ",
      d: "ก ผิด ข ผิด"
    },
    correctAnswer: "b",
    ans: "เฉลย 2 เพราะว่า {4, 4, 3, 2, 1} = {4, 3, 2, 1} = {1, 2 ,3, 4 } ข้อ ก จึงถูกต้อง เนื่องจาก 1 ∈ {1, 2, 3} แต่       1 € {123} ดังนั้นข้อ ข ไม่ถูกต้อง"

  },
  {
    question: "กำหนดให้ A = {1, 2, 3, ..., 9} , B = {2, 4,6,8} และ C = {1,3,5,7,9} ข้อใดต่อไปนี้ไม่ถูกต้อง",
    answers: {
      a: "A ∩ B = B ",
      b: "A - B = C",
      c: "A - (B∪C) ไม่เท่ากับเซตว่าง",
      d: "B-C = A-C"
    },
    correctAnswer: "c",
    ans: "เฉลย 3"

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

function showResults(){
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
    resultsContainer.innerHTML = correct + " เต็ม " + myQuestions.length;
    alert(correct + " เต็ม " + myQuestions.length);
}


function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  
  if (currentSlide == 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  
  if (currentSlide == slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
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