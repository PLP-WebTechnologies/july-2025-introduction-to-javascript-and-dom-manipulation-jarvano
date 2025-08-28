// 🎯 Part 1: Variables & Conditionals
let userName = prompt("Enter your name:");
if (userName) {
  console.log(`Welcome, ${userName}!`);
  document.getElementById("message").innerText = `Hello, ${userName}! 👋`;
} else {
  console.log("No name entered.");
}

// ❤️ Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatGreeting(name) {
  return `🌟 Welcome, ${name.toUpperCase()}!`;
}

console.log(calculateTotal(200, 3)); // Example
console.log(formatGreeting("Javan"));

// 🔁 Part 3: Loops
let items = ["Milk", "Eggs", "Bread", "Butter"];

// Using for loop
for (let i = 0; i < items.length; i++) {
  console.log("Item:", items[i]);
}

// Using forEach loop
items.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "🔥 Text Changed with JavaScript!";
});

document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.getElementById("message").classList.toggle("active");
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.innerText = "🛒 New Shopping Item";
  document.getElementById("itemList").appendChild(newItem);
});
