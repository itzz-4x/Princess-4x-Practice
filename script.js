const TOTAL_SECONDS = 210*60;
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id=>document.getElementById(id);

// --- Google Sheet Config ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz5H4UMbNsEMd0pOO46ijtu6CKpEDEQxFkK75qABmCvb-_SRPA-ibd9U3Qy5IHZ2ogJyQ/exec";
const TOKEN = "P4XPortalSecure2025";

// --- Timer format ---
function formatTime(s){
  const h=Math.floor(s/3600).toString().padStart(2,'0');
  const m=Math.floor((s%3600)/60).toString().padStart(2,'0');
  const sec=(s%60).toString().padStart(2,'0');
  return `${h}:${m}:${sec}`;
}

// --- Start Exam ---
function startExam(){
  const name=document.getElementById('name').value.trim();
  if(!name){alert('Enter name');return;}
  localStorage.setItem('neet_user', name);
  document.getElementById('start').style.display='none';
  document.getElementById('exam').style.display='block';
  renderQuestion();
  startTimer();
}

// --- Timer ---
function startTimer(){
  el('timer').innerText=formatTime(timer);
  window._timerInterval = setInterval(()=>{
    timer--;
    if(timer<=0){clearInterval(window._timerInterval);finishExam();return;}
    el('timer').innerText=formatTime(timer);
  },1000);
}

// --- Render Question ---
function renderQuestion(){
  const q = QUESTIONS[current];
  el('qnum').innerText = `Q ${current+1} / ${QUESTIONS.length}`;
  el('question').innerText = q.q;
  const opts = document.getElementById('opts');
  opts.innerHTML='';
  q.a.forEach((op,i)=>{
    const d=document.createElement('div');
    d.className='opt';
    d.innerText=op;
    if(answers[current]===i) d.classList.add('selected');
    d.onclick = ()=>{
      answers[current]=i;
      document.querySelectorAll('.opt').forEach(x=>x.classList.remove('selected'));
      d.classList.add('selected');
    };
    opts.appendChild(d);
  });
  document.getElementById('prev').disabled = current===0;
}

// --- Navigation ---
function prevQ(){ if(current>0){ current--; renderQuestion(); } }
function nextQ(){ if(current<QUESTIONS.length-1){ current++; renderQuestion(); } else finishExam(); }

// --- Send to Google Sheet ---
async function sendScoreToSheet(name, score, duration){
  const payload = {name, score, duration, token: TOKEN};
  try{
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {"Content-Type":"application/json"}
    });
    const data = await res.json();
    console.log("Sheet Submission:", data);
  }catch(err){
    console.error("SendScore error:", err);
  }
}

// --- Finish Exam ---
function finishExam(){
  clearInterval(window._timerInterval);
  score=0;
  for(let i=0;i<QUESTIONS.length;i++){
    const ans = answers[i];
    if(ans===null) continue;
    if(ans===QUESTIONS[i].correct) score+=4;
    else score-=1;
  }
  const user = localStorage.getItem('neet_user')||'Unknown';
  const duration = TOTAL_SECONDS - timer;

  // Store in local logs
  const logs = JSON.parse(localStorage.getItem('neet_logs')||'[]');
  logs.push({user,score,time:new Date().toISOString()});
  localStorage.setItem('neet_logs', JSON.stringify(logs));

  // Send to Google Sheet
  sendScoreToSheet(user, score, duration);

  // Show result
  document.getElementById('exam').style.display='none';
  document.getElementById('result').style.display='block';
  document.getElementById('resText').innerText = `${user}, your score: ${score} / ${QUESTIONS.length*4}`;
}

// --- Event Listeners ---
document.getElementById('startBtn').addEventListener('click', startExam);
document.getElementById('prev').addEventListener('click', prevQ);
document.getElementById('next').addEventListener('click', nextQ);
document.getElementById('restart').addEventListener('click', ()=>location.reload());
