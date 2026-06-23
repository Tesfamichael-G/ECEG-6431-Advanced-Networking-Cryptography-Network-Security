class FillBlankEngine {
    constructor(containerId, exercises) {
        this.container = document.getElementById(containerId);
        this.exercises = exercises;
        this.score = 0;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        if (this.exercises.length === 0) {
            this.container.innerHTML = '<p><em>No fill-in-the-blank exercises for this module.</em></p>';
            return;
        }

        this.exercises.forEach((ex, idx) => {
            const div = document.createElement('div');
            div.className = 'fib-exercise';
            // Replace the blank placeholder ___ with an input and wrap in span.blank
            const sentenceHtml = ex.sentence.replace(
                /_{2,}/,
                `<span class="blank"><input type="text" id="fib-${idx}" placeholder="your answer"></span>`
            );
            div.innerHTML = `
                <div class="sentence">${idx+1}. ${sentenceHtml}</div>
                <div class="fib-feedback" id="fib-feedback-${idx}"></div>
            `;
            this.container.appendChild(div);
        });

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'fib-actions quiz-actions';
        actionsDiv.innerHTML = `
            <button class="btn" id="checkFib">Check Answers</button>
            <button class="btn btn-outline" id="resetFib">Reset</button>
        `;
        this.container.appendChild(actionsDiv);

        document.getElementById('checkFib').addEventListener('click', () => this.grade());
        document.getElementById('resetFib').addEventListener('click', () => this.reset());
    }

    grade() {
        this.score = 0;
        this.exercises.forEach((ex, idx) => {
            const userAnswer = document.getElementById(`fib-${idx}`).value.trim();
            const correct = ex.answer.trim();
            const feedbackDiv = document.getElementById(`fib-feedback-${idx}`);
            const isCorrect = userAnswer.toLowerCase() === correct.toLowerCase();
            if (isCorrect) this.score++;
            feedbackDiv.innerHTML = isCorrect
                ? `<span class="correct">✓ Correct</span>`
                : `<span class="wrong">✗ Incorrect – correct answer: ${this.escapeHtml(correct)}</span>`;
        });
        alert(`Your score: ${this.score}/${this.exercises.length}`);
    }

    reset() {
        this.exercises.forEach((_, idx) => {
            const input = document.getElementById(`fib-${idx}`);
            if (input) input.value = '';
            const fb = document.getElementById(`fib-feedback-${idx}`);
            if (fb) fb.innerHTML = '';
        });
        this.score = 0;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}