function initQuiz() {
    let score = 0;
    const totalQuestions = document.querySelectorAll('.answers-container').length;
    let usersAnswerStorage = [];
    const answersGiven = new Set();

    document.querySelectorAll('.answer-option').forEach(button => {
        button.addEventListener('click', (event) => {
            alert("You selected: " + event.target.textContent);
            usersAnswerStorage.push(event.target.textContent);
            const parentContainer = event.target.closest('.answers-container');
            const questionIndex =
                Array.from(parentContainer.parentNode.children).indexOf(parentContainer);

            const isCorrect = event.target.getAttribute('data-correct') === "true";
            if (isCorrect) {
                score++;
            }

            parentContainer.
                querySelectorAll('.answer-option').
                forEach(btn => btn.disabled = true);
            answersGiven.add(questionIndex);
        });
    });

    document.getElementById('submit-button').addEventListener('click', () => {
        if (answersGiven.size === totalQuestions) {

            alert(`Test Results:\nYour score is ${score} out of ${totalQuestions}.\n${(score / totalQuestions) * 100}%.
            \n${score} correct answers and ${totalQuestions - score} incorrect answers.`);
            alert(`You answered:\n${usersAnswerStorage.join(', ')}`);
            if (confirm('Do you want to see the full explanation of the solutions?')) {
                window.location.href = 'results.html';
            }
        } else {
            alert(`Please answer all questions.
             You have answered ${answersGiven.size} out of ${totalQuestions}.`);
        }
    });
}

document.addEventListener('DOMContentLoaded', initQuiz);

//Source: ChatGPT, it mostly helped me with debugging and finding errors.