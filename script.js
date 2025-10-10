const TOTAL_SECONDS = 180 * 60; // 3 hours
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id => document.getElementById(id);

// Google Sheet config
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwOqN09GhtOWmT_WwJVgCgDAqiV2tck7XapYyDpKxEq08mpV0vAu06UKbSMA-y94tPoxg/exec";
const SECRET_TOKEN = "NEET2025_SECRET_8867";

function formatTime(s) {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
}

function startExam() {
    const name = el('name').value.trim();
    if (!name) { alert('Please enter your name'); return; }
    localStorage.setItem('neet_user', name);
    el('start').style.display = 'none';
    el('exam').style.display = 'block';
    renderQuestion();
    startTimer();
    window.scrollTo(0, 0);
}

function startTimer() {
    el('timer').innerText = formatTime(timer);
    window._timerInterval = setInterval(() => {
        timer--;
        if (timer <= 0) {
            clearInterval(window._timerInterval);
            finishExam();
            return;
        }
        el('timer').innerText = formatTime(timer);
    }, 1000);
}

function renderQuestion() {
    const q = QUESTIONS[current];
    el('qnum').innerText = `Q ${current + 1} / ${QUESTIONS.length}`;
    el('question').innerText = q.q;
    const opts = el('opts');
    opts.innerHTML = '';
    q.a.forEach((op, i) => {
        const d = document.createElement('div');
        d.className = 'opt';
        d.innerText = op;
        if (answers[current] === i) d.classList.add('selected');
        d.onclick = () => {
            answers[current] = i;
            document.querySelectorAll('.opt').forEach(x => x.classList.remove('selected'));
            d.classList.add('selected');
        };
        opts.appendChild(d);
    });
    el('prev').disabled = current === 0;
    el('next').innerText = current < QUESTIONS.length - 1 ? 'Next' : 'Finish';
}

function prevQ() { if (current > 0) { current--; renderQuestion(); } }
function nextQ() { if (current < QUESTIONS.length - 1) { current++; renderQuestion(); } else finishExam(); }

function finishExam() {
    clearInterval(window._timerInterval);
    score = 0;
    let correct = 0, wrong = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
        const ans = answers[i];
        if (ans === null) continue;
        if (ans === QUESTIONS[i].correct) { score += 4; correct++; } 
        else { score -= 1; wrong++; }
    }
    const user = localStorage.getItem('neet_user') || 'Unknown';
    el('exam').style.display = 'none';
    el('result').style.display = 'block';
    el('resText').innerText = `${user}, your score: ${score} / ${QUESTIONS.length * 4}`;

    // Send result to Google Sheet
    const data = {
        Name: user,
        Score: score,
        Correct: correct,
        Wrong: wrong,
        Time: formatTime(timer),
        SubmittedAt: new Date().toISOString(),
        secret: SECRET_TOKEN
    };
    fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(resp => console.log("Saved to Sheet:", resp))
    .catch(err => console.error("Save failed:", err));
}

// Event Listeners
document.getElementById('startBtn').addEventListener('click', startExam);
document.getElementById('prev').addEventListener('click', prevQ);
document.getElementById('next').addEventListener('click', nextQ);
document.getElementById('finishBtn').addEventListener('click', finishExam); // Always visible finish
document.getElementById('restart').addEventListener('click', () => location.reload());
