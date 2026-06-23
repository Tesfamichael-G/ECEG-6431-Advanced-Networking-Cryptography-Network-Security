class CodePredictionEngine {
    constructor(containerId, exercises) {
        this.container = document.getElementById(containerId);
        this.exercises = exercises;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        if (this.exercises.length === 0) {
            this.container.innerHTML = '<p><em>No code prediction exercises for this module.</em></p>';
            return;
        }

        this.exercises.forEach((ex, idx) => {
            const exDiv = document.createElement('div');
            exDiv.className = 'code-exercise';
            exDiv.innerHTML = `
                <h4>Exercise ${idx+1}</h4>
                <div class="code-block">${this.escapeHtml(ex.code)}</div>
                <div class="prediction-area">
                    <label for="prediction-${idx}">Your predicted output:</label>
                    <textarea id="prediction-${idx}" rows="3" placeholder="Type the expected output..."></textarea>
                </div>
                <button class="btn" data-ex="${idx}">Check Output</button>
                <div class="output-comparison" id="comparison-${idx}"></div>
            `;
            this.container.appendChild(exDiv);
            exDiv.querySelector('button').addEventListener('click', (e) => {
                this.checkOutput(idx);
            });
        });
    }

    checkOutput(idx) {
        const userOutput = document.getElementById(`prediction-${idx}`).value.trim();
        const correct = this.exercises[idx].correctOutput.trim();
        const compDiv = document.getElementById(`comparison-${idx}`);
        const isCorrect = (userOutput === correct);
        compDiv.style.display = 'block';
        compDiv.innerHTML = `
            <div class="${isCorrect ? 'correct' : 'wrong'}">
                ${isCorrect ? '✓ Correct!' : '✗ Not quite right.'}
            </div>
            <div class="compare-results">
                <div>
                    <strong>Your output:</strong>
                    <pre>${this.escapeHtml(userOutput) || '&nbsp;'}</pre>
                </div>
                <div>
                    <strong>Expected output:</strong>
                    <pre>${this.escapeHtml(correct)}</pre>
                </div>
            </div>
        `;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}