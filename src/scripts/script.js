const jsConfetti = new JSConfetti()

document.querySelector("input").addEventListener("click", function () {
    let body = document.body;
    body.classList.toggle("theme");
    let theme = document.querySelector("input");
    if (body.classList.contains("theme")) {
        theme.textContent = "☀️ Light Mode";
    } else {
        theme.textContent = "🌙 Dark Mode";
    }
    jsConfetti.addConfetti({
        confettiRadius: 0,
        confettiColors: ['red', '#000000'],
        confettiNumber: 10000,
        emojis: ['🩸', '🍎', '☄️', '❌', '❤️', '😡'],
        emojiSize: 3
    })
});