// Set the target date for the countdown (February 14, 2024)
let countdownDate = new Date("Feb 14, 2024 00:00:00").getTime();

// Get the countdown element and fluid animation
let countdownElement = document.getElementById("countdown-text");
let fluid = document.getElementById("fluid");

// Update the countdown text and fluid animation
function updateCountdown() {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  // Calculate days left
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Update the countdown text
  countdownElement.innerText = days + " Days";

  // Update fluid level based on remaining days (fluid will drop slightly each day)
  let fluidHeight = (days / 365) * 100; // Adjust this based on your design
  fluid.style.height = fluidHeight + "%";

  // Stop the countdown if it reaches zero
  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerText = "Event Day!";
    fluid.style.height = "100%";  // Keep the fluid at full height when event day is reached
  }
}

// Call the function once to set the initial countdown
updateCountdown();

// Update the countdown every 24 hours (86400000 ms)
let interval = setInterval(updateCountdown, 86400000);
