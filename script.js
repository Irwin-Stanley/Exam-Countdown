// Countdown Timer until February 14
function startCountdown() {
  const targetDate = new Date('2025-02-14T00:00:00').getTime();
  const timerElement = document.getElementById('countdown-timer');

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    timerElement.textContent = `${days} days left`;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      timerElement.textContent = 'Time’s up!';
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Quotes that change daily or on reload
function loadQuotes() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
  ];

  const leftQuote = document.getElementById('quote-left');
  const rightQuote = document.getElementById('quote-right-text');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  leftQuote.textContent = randomQuote;
  rightQuote.textContent = randomQuote;
}

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  loadQuotes();
});
