// Variables
let currentQuestion = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let username = "";
let timerSec = 10800; // 3 hours
let timerInterval;

// Replace with your deployed Web App URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwOqN09GhtOWmT_WwJVgCgDAqiV2tck7XapYyDpKxEq08mpV0vAu06UKbSMA-y94tPoxg/exec";
const SECRET_TOKEN = "NEET2025_SECRET_8867";

// DOM Elements
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const finishBtn = document.getElementById("finish-btn");

// Event Listeners
startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
finishBtn.addEventListener("click", finishTest);

// Functions
function startTest() {
  username = document.getElementById("username").value.trim();
  if(!username){ alert("Please enter name!"); return;}
  document.getElementById("start-screen").style.display="none";
  document.getElementById("test-screen").style.display="flex";
  showQuestion();
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(()=>{
    if(timerSec<=0){ finishTest(); return;}
    timerSec--;
    let h=Math.floor(timerSec/3600).toString().padStart(2,'0');
    let m=Math.floor((timerSec%3600)/60).toString().padStart(2,'0');
    let s=(timerSec%60).toString().padStart(2,'0');
    document.getElementById("timer").innerText=`${h}:${m}:${s}`;
  },1000);
}

function showQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question-text").innerText=`Q${currentQuestion+1}. ${q.q}`;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML="";
  q.options.forEach((opt,i)=>{
    let btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText=opt;
    btn.onclick=()=>selectOption(i);
    if(q.selected==i) btn.classList.add("selected");
    optionsDiv.appendChild(btn);
  });
}

function selectOption(idx){
  questions[currentQuestion].selected = idx;
  showQuestion();
}

function nextQuestion(){
  if(currentQuestion<questions.length-1){ currentQuestion++; showQuestion();}
}

function prevQuestion(){
  if(currentQuestion>0){ currentQuestion--; showQuestion();}
}

function finishTest(){
  clearInterval(timerInterval);
  score=0; correct=0; wrong=0;
  questions.forEach(q=>{
    if(q.selected==q.ans){ score+=4; correct++; }
    else if(q.selected!=undefined){ score-=1; wrong++; }
  });
  document.getElementById("test-screen").style.display="none";
  document.getElementById("result-screen").style.display="flex";
  document.getElementById("score-text").innerText=`Score: ${score}`;
  document.getElementById("details-text").innerText=`Correct: ${correct} | Wrong: ${wrong} | Name: ${username}`;
  sendResult();
}

function sendResult(){
  let data={
    Name: username,
    Score: score,
    Correct: correct,
    Wrong: wrong,
    Time: document.getElementById("timer").innerText,
    secret: SECRET_TOKEN
  };
  fetch(WEB_APP_URL,{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  })
  .then(r=>r.json())
  .then(resp=>console.log("Saved:", resp))
  .catch(err=>console.error("Save failed:", err));
}
