// ===== CONFIG =====
const TOTAL_SECONDS = 10800; // 3 hours
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzShjgiRIjDW8Bc7Rbd56ofB6cT3BBCPcMqIyCehK1ow8Mv-FdWC26OkVNivpGIsVLBIQ/exec";
const TOKEN = "P4XPortalSecure2025";

// ===== VARIABLES =====
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id => document.getElementById(id);

// ===== TIMER FORMAT =====
function formatTime(s){
  const h = Math.floor(s/3600).toString().padStart(2,'0');
  const m = Math.floor((s%3600)/60).toString().padStart(2,'0');
  const sec = (s%60).toString().padStart(2,'0');
  return `${h}:${m}:${sec}`;
}

// ===== START EXAM =====
function startExam(){
  const name = el('name').value.trim();
  if(!name){ alert('Enter name'); return; }
  localStorage.setItem('neet_user', name);
  el('start').style.display='none';
  el('exam').style.display='block';
  renderQuestion();
  startTimer();
}

// ===== TIMER =====
function startTimer(){
  el('timer').innerText = formatTime(timer);
  window._timerInterval = setInterval(()=>{
    timer--;
    if(timer <= 0){
      clearInterval(window._timerInterval);
      finishExam();
      return;
    }
    el('timer').innerText = formatTime(timer);
  },1000);
}

// ===== RENDER QUESTION =====
function renderQuestion(){
  const q = QUESTIONS[current];
  el('qnum').innerText = `Q ${current+1} / ${QUESTIONS.length}`;
  el('question').innerText = q.q;
  const opts = el('opts');
  opts.innerHTML='';
  q.a.forEach((op,i)=>{
    const d = document.createElement('div');
    d.className='opt';
    d.innerText = op;
    if(answers[current]===i) d.classList.add('selected');
    d.onclick = ()=>{
      answers[current] = i;
      document.querySelectorAll('.opt').forEach(x=>x.classList.remove('selected'));
      d.classList.add('selected');
    };
    opts.appendChild(d);
  });
  el('prev').disabled = current===0;
}

// ===== NAVIGATION =====
function prevQ(){ if(current>0){ current--; renderQuestion(); } }
function nextQ(){ if(current<QUESTIONS.length-1){ current++; renderQuestion(); } else finishExam(); }

// ===== SEND SCORE TO GOOGLE SHEET =====
async function sendScoreToSheet(name, score, duration){
  const payload = {name, score, duration, token: TOKEN};
  try{
    const res = await fetch(WEB_APP_URL,{
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

// ===== FINISH EXAM =====
function finishExam(){
  clearInterval(window._timerInterval);
  score = 0;
  for(let i=0;i<QUESTIONS.length;i++){
    const ans = answers[i];
    if(ans===null) continue;
    if(ans===QUESTIONS[i].correct) score +=4;
    else score -=1;
  }
  const user = localStorage.getItem('neet_user') || 'Unknown';
  const duration = TOTAL_SECONDS - timer;

  // Local logs
  const logs = JSON.parse(localStorage.getItem('neet_logs')||'[]');
  logs.push({user,score,time:new Date().toISOString()});
  localStorage.setItem('neet_logs', JSON.stringify(logs));

  // Send to Google Sheet
  sendScoreToSheet(user, score, duration);

  // Show result
  el('exam').style.display='none';
  el('result').style.display='block';
  el('resText').innerText = `${user}, your score: ${score} / ${QUESTIONS.length*4}`;
}

// ===== EVENT LISTENERS =====
el('startBtn').addEventListener('click', startExam);
el('prev').addEventListener('click', prevQ);
el('next').addEventListener('click', nextQ);
el('restart').addEventListener('click', ()=>location.reload());
