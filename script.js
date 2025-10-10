
const TOTAL_SECONDS = 210*60;
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id=>document.getElementById(id);
function formatTime(s){const h=Math.floor(s/3600).toString().padStart(2,'0');const m=Math.floor((s%3600)/60).toString().padStart(2,'0');const sec=(s%60).toString().padStart(2,'0');return `${h}:${m}:${sec}`;}
function startExam(){const name=document.getElementById('name').value.trim();if(!name){alert('Enter name');return;}localStorage.setItem('neet_user', name);document.getElementById('start').style.display='none';document.getElementById('exam').style.display='block';renderQuestion();startTimer();}
function startTimer(){el('timer').innerText=formatTime(timer);window._timerInterval = setInterval(()=>{timer--;if(timer<=0){clearInterval(window._timerInterval);finishExam();return;}el('timer').innerText=formatTime(timer);},1000);}
function renderQuestion(){const q = QUESTIONS[current];el('qnum').innerText = `Q ${current+1} / ${QUESTIONS.length}`;el('question').innerText = q.q;const opts = document.getElementById('opts');opts.innerHTML='';q.a.forEach((op,i)=>{const d=document.createElement('div');d.className='opt';d.innerText=op;if(answers[current]===i) d.classList.add('selected');d.onclick = ()=>{answers[current]=i;document.querySelectorAll('.opt').forEach(x=>x.classList.remove('selected'));d.classList.add('selected');};opts.appendChild(d);});document.getElementById('prev').disabled = current===0;}
function prevQ(){ if(current>0){ current--; renderQuestion(); } }
function nextQ(){ if(current<QUESTIONS.length-1){ current++; renderQuestion(); } else finishExam(); }
function finishExam(){ clearInterval(window._timerInterval); score=0; for(let i=0;i<QUESTIONS.length;i++){ const ans = answers[i]; if(ans===null) continue; if(ans===QUESTIONS[i].correct) score+=4; else score-=1; } const user = localStorage.getItem('neet_user')||'Unknown'; const logs = JSON.parse(localStorage.getItem('neet_logs')||'[]'); logs.push({user,score,time:new Date().toISOString()}); localStorage.setItem('neet_logs', JSON.stringify(logs)); document.getElementById('exam').style.display='none'; document.getElementById('result').style.display='block'; document.getElementById('resText').innerText = `${user}, your score: ${score} / ${QUESTIONS.length*4}`; }
document.getElementById('startBtn').addEventListener('click', startExam); document.getElementById('prev').addEventListener('click', prevQ); document.getElementById('next').addEventListener('click', nextQ); document.getElementById('restart').addEventListener('click', ()=>location.reload());
