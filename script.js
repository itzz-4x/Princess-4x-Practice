const TOTAL_SECONDS = 180 * 60;
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id => document.getElementById(id);

// Backend Configuration
const BACKEND_URL = 'https://princess4x-backend.vercel.app';

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
    if (confirm("Are you sure you want to finish the test?")) {
        clearInterval(window._timerInterval);
        calculateScore();
    }
}

async function calculateScore() {
    score = 0;
    let correct = 0, wrong = 0, unattempted = 0;
    
    for (let i = 0; i < QUESTIONS.length; i++) {
        const ans = answers[i];
        if (ans === null) {
            unattempted++;
            continue;
        }
        if (ans === QUESTIONS[i].correct) { 
            score += 4; 
            correct++; 
        } else { 
            score -= 1; 
            wrong++; 
        }
    }
    
    const percentage = ((score / (QUESTIONS.length * 4)) * 100).toFixed(2);
    const user = localStorage.getItem('neet_user') || 'Unknown';
    
    // Backend save karo
    await saveToBackend(user, score, correct, wrong, unattempted, percentage);
    
    el('exam').style.display = 'none';
    el('result').style.display = 'block';
    el('resText').innerHTML = `
        <div class="detailed-results">
            <h3>🎯 Test Completed, ${user}!</h3>
            <div class="score-card">
                <p><strong>Total Score:</strong> ${score}/${QUESTIONS.length * 4}</p>
                <p><strong>Percentage:</strong> ${percentage}%</p>
                <p><strong>✅ Correct:</strong> ${correct}</p>
                <p><strong>❌ Wrong:</strong> ${wrong}</p>
                <p><strong>⏸️ Unattempted:</strong> ${unattempted}</p>
                <p><strong>⏰ Time Left:</strong> ${formatTime(timer)}</p>
            </div>
            <p style="color: #666; font-size: 14px; margin-top: 15px;">
                ✅ Result saved to database
            </p>
        </div>
    `;
}

// 📊 BACKEND SAVE FUNCTION
async function saveToBackend(user, score, correct, wrong, unattempted, percentage) {
    const resultData = {
        student_name: user,
        score: score,
        total_questions: QUESTIONS.length,
        percentage: percentage,
        correct_answers: correct,
        wrong_answers: wrong,
        unattempted_questions: unattempted,
        time_taken: formatTime(TOTAL_SECONDS - timer),
        submitted_at: new Date().toISOString(),
        portal: 'Princess 4X Practice'
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/save-result`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resultData)
        });

        if (response.ok) {
            console.log('✅ Result saved to backend database!');
            return true;
        }
    } catch (error) {
        console.log('❌ Backend save failed:', error);
    }
    
    // Backup local storage
    saveResultsLocal(user, score, correct, wrong, unattempted, percentage);
    return false;
}

// 💾 LOCAL STORAGE BACKUP
function saveResultsLocal(user, score, correct, wrong, unattempted, percentage) {
    const result = {
        name: user,
        score: `${score}/${QUESTIONS.length * 4}`,
        correct: correct,
        wrong: wrong,
        unattempted: unattempted,
        percentage: percentage + '%',
        time: new Date().toLocaleString()
    };
    
    let allResults = JSON.parse(localStorage.getItem('neet_results') || '[]');
    allResults.push(result);
    localStorage.setItem('neet_results', JSON.stringify(allResults));
}

// 📈 ADMIN PANEL FUNCTION
async function showAllStudentsResults() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/results`);
        const allResults = await response.json();
        
        let html = `
            <div class="admin-panel">
                <h2>🔧 Admin Dashboard - Backend Results</h2>
                <p><strong>Total Tests:</strong> ${allResults.length}</p>
                <button onclick="downloadBackendResults()" class="btn-download">📥 Export All Data</button>
                <div class="results-container">
        `;
        
        if (allResults.length === 0) {
            html += `<p>No results in database yet.</p>`;
        } else {
            allResults.forEach((result, index) => {
                html += `
                    <div class="result-card">
                        <div class="result-header">
                            <span class="test-no">#${index + 1}</span>
                            <span class="test-date">${new Date(result.submitted_at).toLocaleString()}</span>
                        </div>
                        <div class="result-body">
                            <p><strong>Student:</strong> ${result.student_name}</p>
                            <p><strong>Score:</strong> ${result.score}/${result.total_questions * 4}</p>
                            <p><strong>Percentage:</strong> ${result.percentage}%</p>
                            <p><strong>Correct:</strong> ${result.correct_answers} | <strong>Wrong:</strong> ${result.wrong_answers} | <strong>Unattempted:</strong> ${result.unattempted_questions}</p>
                            <p><strong>Time:</strong> ${result.time_taken}</p>
                        </div>
                    </div>
                `;
            });
        }
        
        html += `</div></div>`;
        el('result').innerHTML = html;
        
    } catch (error) {
        console.log('❌ Backend fetch failed:', error);
        showAllStudentsResultsLocal();
    }
}

// 📥 EXPORT BACKEND DATA
async function downloadBackendResults() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/export-results`);
        const data = await response.json();
        
        let content = 'NEET TEST RESULTS - Backend Database\n';
        content += '===================================\n\n';
        
        data.forEach((result, index) => {
            content += `TEST #${index + 1}\n`;
            content += `Student: ${result.student_name}\n`;
            content += `Date: ${new Date(result.submitted_at).toLocaleString()}\n`;
            content += `Score: ${result.score}/${result.total_questions * 4}\n`;
            content += `Percentage: ${result.percentage}%\n`;
            content += `Correct: ${result.correct_answers} | Wrong: ${result.wrong_answers} | Unattempted: ${result.unattempted_questions}\n`;
            content += `Time: ${result.time_taken}\n`;
            content += '-----------------------------------\n';
        });
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `BACKEND_RESULTS_${new Date().toLocaleDateString()}.txt`;
        a.click();
        
    } catch (error) {
        alert('❌ Failed to export data');
    }
}

// Event Listeners
document.getElementById('startBtn').addEventListener('click', startExam);
document.getElementById('prev').addEventListener('click', prevQ);
document.getElementById('next').addEventListener('click', nextQ);
document.getElementById('restart').addEventListener('click', () => location.reload());

// Admin Button
document.addEventListener('DOMContentLoaded', function() {
    const adminBtn = document.createElement('button');
    adminBtn.textContent = '🔧 Admin Panel';
    adminBtn.style.background = '#666';
    adminBtn.style.marginTop = '10px';
    adminBtn.onclick = showAllStudentsResults;
    document.querySelector('#start .row').appendChild(adminBtn);
});
