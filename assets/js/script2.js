// Initial balance and boost level
let balance = 0;
let boostLevel = 1;
let boostCost = 100; // Initial boost cost

// Function to update balance
const updateBalance = () => {
  balance += boostLevel; // Increase balance by current boost level
  document.getElementById("balance").textContent = balance;

  // Show +1 animation
  const incrementDisplay = document.getElementById("increment-display");
  incrementDisplay.textContent = "+1"; // Show +1 text
  incrementDisplay.classList.add("increment-animation"); // Start the animation
  setTimeout(() => {
    incrementDisplay.classList.remove("increment-animation"); // Reset animation
  }, 100); // After 1 second, reset the animation
};

// Boost function
const handleBoost = () => {
  if (balance >= boostCost) {
    balance -= boostCost; // Deduct coins for boost
    boostLevel+=1; // Increase boost level
    boostCost *= 2; // Increase boost cost (e.g., next level costs more)

    // Update the displayed values
    document.getElementById("balance").textContent = balance;
    document.getElementById("boost-level").textContent = boostLevel;
    document.getElementById("boost-cost").textContent = Math.floor(boostCost); // Round the cost
  } else {
    alert("Not enough coins to boost!");
  }
};

// Add event listener to the coin button
document.getElementById("coin-button").addEventListener("click", updateBalance);

// Add event listener to the boost button
document.getElementById("boost-button").addEventListener("click", handleBoost);