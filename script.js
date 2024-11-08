const targetDate = new Date('2024-02-14').getTime();
const countdownElement = document.getElementById('countdown');
const waterLevelElement = document.getElementById('water-level');
const leftQuoteElement = document.getElementById('quote-left');
const rightQuoteElement = document.getElementById('quote-right');

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    countdownElement.textContent = `${days} Days Left`;

    // Update the water level
    const waterHeight = Math.max(0, (days / 100) * 100);
    waterLevelElement.style.height = `${waterHeight}%`;
}

// Function to update quotes
function updateQuotes() {
    const quotes = [
        "“The best way to predict the future is to create it.” – Abraham Lincoln",
        "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson",
        "“Everything you’ve ever wanted is on the other side of fear.” – George Addair",
        "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill",
        "“The only way to do great work is to love what you do.” – Steve Jobs"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    leftQuoteElement.textContent = selectedQuote;
    rightQuoteElement.textContent = selectedQuote;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
setInterval(updateQuotes, 86400000); // Update quotes every 24 hours
updateCountdown();
updateQuotes();
