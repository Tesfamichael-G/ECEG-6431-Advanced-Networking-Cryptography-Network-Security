// class QuizEngine {
//     constructor(containerId, questions) {
//         this.container = document.getElementById(containerId);
//         this.questions = questions;
//         this.userAnswers = new Array(questions.length).fill(null);
//         this.score = 0;
//         this.render();
//     }

//     render() {
//         this.container.innerHTML = '';
//         if (this.questions.length === 0) {
//             this.container.innerHTML = '<p><em>No MCQs available for this module yet.</em></p>';
//             return;
//         }

//         this.questions.forEach((q, idx) => {
//             const card = document.createElement('div');
//             card.className = 'question-card';
//             card.innerHTML = `
//                 <div class="question-text">${idx+1}. ${q.question}</div>
//                 <div class="options" id="options-${idx}">
//                     ${q.options.map((opt, optIdx) => `
//                         <label>
//                             <input type="radio" name="q${idx}" value="${optIdx}" 
//                                 ${this.userAnswers[idx] === optIdx ? 'checked' : ''}>
//                             ${opt}
//                         </label>
//                     `).join('')}
//                 </div>
//                 <div class="feedback" id="feedback-${idx}" style="display:${this.userAnswers[idx] !== null ? 'block' : 'none'}">
//                     ${this.userAnswers[idx] !== null ? this.getFeedbackHtml(idx) : ''}
//                 </div>
//             `;
//             // Attach event listeners after adding to DOM
//             this.container.appendChild(card);
//             const radios = card.querySelectorAll(`input[name="q${idx}"]`);
//             radios.forEach(radio => {
//                 radio.addEventListener('change', (e) => {
//                     this.selectAnswer(idx, parseInt(e.target.value));
//                 });
//             });
//         });

//         // Add action buttons
//         const actionsDiv = document.createElement('div');
//         actionsDiv.className = 'quiz-actions';
//         actionsDiv.innerHTML = `
//             <button class="btn" id="submitQuiz">Submit</button>
//             <button class="btn btn-outline" id="resetQuiz">Reset</button>
//         `;
//         this.container.appendChild(actionsDiv);

//         document.getElementById('submitQuiz').addEventListener('click', () => this.gradeQuiz());
//         document.getElementById('resetQuiz').addEventListener('click', () => this.resetQuiz());
//     }

//     selectAnswer(qIdx, answerIdx) {
//         this.userAnswers[qIdx] = answerIdx;
//         // Show feedback immediately if you want, but we'll show after submit
//     }

//     getFeedbackHtml(qIdx) {
//         const q = this.questions[qIdx];
//         const isCorrect = this.userAnswers[qIdx] === q.correct;
//         const correctLabel = q.options[q.correct];
//         let html = `<span class="${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>`;
//         if (!isCorrect) {
//             html += ` <br>Correct answer: <strong>${correctLabel}</strong>`;
//         }
//         if (q.explanation) {
//             html += `<div class="explanation">${q.explanation}</div>`;
//         }
//         return html;
//     }

//     gradeQuiz() {
//         this.score = 0;
//         this.questions.forEach((q, idx) => {
//             if (this.userAnswers[idx] === q.correct) this.score++;
//             // Update feedback div
//             const feedbackDiv = document.getElementById(`feedback-${idx}`);
//             if (feedbackDiv) {
//                 feedbackDiv.style.display = 'block';
//                 feedbackDiv.innerHTML = this.getFeedbackHtml(idx);
//             }
//         });
//         alert(`Your score: ${this.score}/${this.questions.length}`);
//     }

//     resetQuiz() {
//         this.userAnswers = new Array(this.questions.length).fill(null);
//         this.score = 0;
//         this.render();
//     }
// }

class QuizEngine {
    constructor(containerId, questions) {
        this.container = document.getElementById(containerId);
        this.questions = questions;
        this.userAnswers = new Array(questions.length).fill(null);
        this.score = 0;
        this.render();
    }

    // HTML‑escape helper
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return text.replace(/[&<>"']/g, (ch) => map[ch]);
    }

    render() {
        this.container.innerHTML = '';
        if (this.questions.length === 0) {
            this.container.innerHTML = '<p><em>No MCQs available for this module yet.</em></p>';
            return;
        }

        this.questions.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            // Escape question text
            const safeQuestion = this.escapeHtml(q.question);
            card.innerHTML = `
                <div class="question-text">${idx + 1}. ${safeQuestion}</div>
                <div class="options" id="options-${idx}">
                    ${q.options.map((opt, optIdx) => `
                        <label>
                            <input type="radio" name="q${idx}" value="${optIdx}" 
                                ${this.userAnswers[idx] === optIdx ? 'checked' : ''}>
                            ${this.escapeHtml(opt)}
                        </label>
                    `).join('')}
                </div>
                <div class="feedback" id="feedback-${idx}" style="display:${this.userAnswers[idx] !== null ? 'block' : 'none'}">
                    ${this.userAnswers[idx] !== null ? this.getFeedbackHtml(idx) : ''}
                </div>
            `;
            // Attach event listeners
            this.container.appendChild(card);
            const radios = card.querySelectorAll(`input[name="q${idx}"]`);
            radios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    this.selectAnswer(idx, parseInt(e.target.value));
                });
            });
        });

        // Action buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'quiz-actions';
        actionsDiv.innerHTML = `
            <button class="btn" id="submitQuiz">Submit</button>
            <button class="btn btn-outline" id="resetQuiz">Reset</button>
        `;
        this.container.appendChild(actionsDiv);

        document.getElementById('submitQuiz').addEventListener('click', () => this.gradeQuiz());
        document.getElementById('resetQuiz').addEventListener('click', () => this.resetQuiz());
    }

    selectAnswer(qIdx, answerIdx) {
        this.userAnswers[qIdx] = answerIdx;
    }

    getFeedbackHtml(qIdx) {
        const q = this.questions[qIdx];
        const isCorrect = this.userAnswers[qIdx] === q.correct;
        const correctLabel = q.options[q.correct];
        let html = `<span class="${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>`;
        if (!isCorrect) {
            html += ` <br>Correct answer: <strong>${this.escapeHtml(correctLabel)}</strong>`;
        }
        if (q.explanation) {
            // explanation may contain HTML (like <code> tags) – we trust the data, but still escape user‑provided text?
            // For now we assume explanation is safe HTML from the data file.
            html += `<div class="explanation">${q.explanation}</div>`;
        }
        return html;
    }

    gradeQuiz() {
        this.score = 0;
        this.questions.forEach((q, idx) => {
            if (this.userAnswers[idx] === q.correct) this.score++;
            const feedbackDiv = document.getElementById(`feedback-${idx}`);
            if (feedbackDiv) {
                feedbackDiv.style.display = 'block';
                feedbackDiv.innerHTML = this.getFeedbackHtml(idx);
            }
        });
        alert(`Your score: ${this.score}/${this.questions.length}`);
    }

    resetQuiz() {
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.render();
    }
}