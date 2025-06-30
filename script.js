document.getElementById('magicBtn').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    const messages = [
        "You are awesome! 🚀",
        "Keep building amazing things! 💡",
        "Red is the color of passion and creativity! ❤️",
        "Thanks for visiting my profile! 😊"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    surprise.style.opacity = 0;
    setTimeout(() => {
        surprise.textContent = randomMsg;
        surprise.style.opacity = 1;
    }, 400);
});
