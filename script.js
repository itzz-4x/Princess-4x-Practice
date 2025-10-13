const TOTAL_SECONDS = 180 * 60; // 3 hours
let timer = TOTAL_SECONDS;
let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let score = 0;
const el = id => document.getElementById(id);

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

// ✅ Finish Button Function
function finishExam() {
    if (confirm("Are you sure you want to finish the test? You cannot go back!")) {
        clearInterval(window._timerInterval);
        calculateScore();
    }
}

function calculateScore() {
    score = 0;
    let correct = 0, wrong = 0, unattempted = 0;
    
    // Calculate scores with unattempted
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
    
    // Calculate percentage
    const percentage = ((score / (QUESTIONS.length * 4)) * 100).toFixed(2);
    
    const user = localStorage.getItem('neet_user') || 'Unknown';
    el('exam').style.display = 'none';
    el('result').style.display = 'block';
    
    // ✅ Show detailed results
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
                📧 Result sent to Gmail | 💾 Saved locally
            </p>
        </div>
    `;

    // ✅ Send to Gmail
    sendToGmail(user, score, correct, wrong, unattempted, percentage);
    
    // ✅ Save locally
    saveResultsLocal(user, score, correct, wrong, unattempted, percentage);
}

// 📧 Gmail Integration Function
function sendToGmail(user, score, correct, wrong, unattempted, percentage) {
    const subject = `NEET Test Result - ${user}`;
    const body = `
📊 NEET TEST RESULT - Princess 4X Portal
=================================

👤 Student Name: ${user}
📅 Test Date: ${new Date().toLocaleString()}
🎯 Total Score: ${score}/${QUESTIONS.length * 4}
📈 Percentage: ${percentage}%

📋 Detailed Breakdown:
✅ Correct Answers: ${correct}
❌ Wrong Answers: ${wrong}  
⏸️ Unattempted: ${unattempted}

⏰ Time Completed In: ${formatTime(TOTAL_SECONDS - timer)}
📝 Total Questions: ${QUESTIONS.length}

=================================
Generated via Princess 4X Practice Portal
    `.trim();

    // 📧 TUMHARI GMAIL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammedanas4x@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
}

// 💾 Local Storage Save Function
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
    
    // LocalStorage mein save karo
    let allResults = JSON.parse(localStorage.getItem('neet_results') || '[]');
    allResults.push(result);
    localStorage.setItem('neet_results', JSON.stringify(allResults));
    
    return allResults;
}

// 🔒 Admin Panel Function
function showAdminLogin() {
    const ADMIN_PASSWORD = "princess2025";
    const password = prompt("🔒 Enter Admin Password:");
    
    if (password === ADMIN_PASSWORD) {
        showAllStudentsResults();
    } else if (password) {
        alert("❌ Wrong password!");
    }
}

// 📊 All Results Display Function
function showAllStudentsResults() {
    const allResults = JSON.parse(localStorage.getItem('neet_results') || '[]');
    
    if (allResults.length === 0) {
        el('result').innerHTML = `
            <h2>🔧 Admin Panel</h2>
            <p>No test results found yet.</p>
            <div class="row">
                <button onclick="location.reload()">Back to Test</button>
            </div>
        `;
    } else {
        let html = `<h2>🔧 Admin Panel</h2><p>Total Tests: ${allResults.length}</p><div class="results-list">`;
        
        allResults.forEach((result, index) => {
            html += `
                <div class="result-item">
                    <strong>Test ${index + 1}:</strong> ${result.name}<br>
                    Score: ${result.score} | Percentage: ${result.percentage}<br>
                    Correct: ${result.correct} | Wrong: ${result.wrong} | Unattempted: ${result.unattempted}<br>
                    <small>${result.time}</small>
                    <hr>
                </div>
            `;
        });
        
        html += `</div>
            <div class="row">
                <button onclick="downloadAllResults()">📥 Download All</button>
                <button onclick="clearAllResults()">🗑️ Clear All</button>
                <button onclick="location.reload()">Back to Test</button>
            </div>
        `;
        
        el('result').innerHTML = html;
    }
    
    el('exam').style.display = 'none';
    el('start').style.display = 'none';
    el('result').style.display = 'block';
}

// 📥 Download All Results
function downloadAllResults() {
    const allResults = JSON.parse(localStorage.getItem('neet_results') || '[]');
    
    let content = 'NEET TEST RESULTS - Princess 4X Portal\n';
    content += '===================================\n\n';
    
    allResults.forEach((result, index) => {
        content += `TEST #${index + 1}\n`;
        content += `Student: ${result.name}\n`;
        content += `Date: ${result.time}\n`;
        content += `Score: ${result.score}\n`;
        content += `Percentage: ${result.percentage}\n`;
        content += `Correct: ${result.correct} | Wrong: ${result.wrong} | Unattempted: ${result.unattempted}\n`;
        content += '-----------------------------------\n';
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ALL_NEET_RESULTS_${new Date().toLocaleDateString()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// 🗑️ Clear All Results
function clearAllResults() {
    if (confirm('Are you sure you want to delete ALL results? This cannot be undone!')) {
        localStorage.removeItem('neet_results');
        alert('All results cleared successfully!');
        showAllStudentsResults();
    }
}

// ✅ AUTOMATICALLY FINISH BUTTON CREATE KARO (FIXED)
function addFinishButton() {
    // Wait for exam section to be available
    setTimeout(() => {
        const nav = document.querySelector('.nav');
        if (nav && !document.getElementById('finishBtn')) {
            const finishBtn = document.createElement('button');
            finishBtn.id = 'finishBtn';
            finishBtn.textContent = '🏁 Finish Test';
            finishBtn.onclick = finishExam;
            nav.appendChild(finishBtn);
        }
    }, 100);
}

// ✅ ADD ADMIN BUTTON (FIXED)
function addAdminButton() {
    const startSection = document.getElementById('start');
    if (startSection) {
        const row = startSection.querySelector('.row');
        if (row && !startSection.querySelector('.admin-btn')) {
            const adminBtn = document.createElement('button');
            adminBtn.className = 'admin-btn';
            adminBtn.textContent = '🔧 Admin Panel';
            adminBtn.style.background = '#666';
            adminBtn.style.marginTop = '10px';
            adminBtn.onclick = showAdminLogin;
            row.appendChild(adminBtn);
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add admin button
    addAdminButton();
    
    // Add finish button when exam starts
    document.getElementById('startBtn').addEventListener('click', function() {
        setTimeout(addFinishButton, 500);
    });
});

document.getElementById('startBtn').addEventListener('click', startExam);
document.getElementById('prev').addEventListener('click', prevQ);
document.getElementById('next').addEventListener('click', nextQ);
document.getElementById('restart').addEventListener('click', () => location.reload());
