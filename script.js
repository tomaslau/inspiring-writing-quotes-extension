const quotes = [
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "A writer is someone for whom writing is more difficult than it is for other people. - Thomas Mann",
  "Writing is its own reward. - Henry Miller",
  "A word after a word after a word is power. - Margaret Atwood",
  "One day I will find the right words, and they will be simple. - Jack Kerouac",
  "The first draft of anything is s***. - Ernest Hemingway",
  "Start writing, no matter what. The water does not flow until the faucet is turned on. - Louis L'Amour",
  "You can always edit a bad page. You can't edit a blank page. - Jodi Picoult",
  "Don't tell me the moon is shining; show me the glint of light on broken glass. - Anton Chekhov",
  "The purpose of a writer is to keep civilization from destroying itself. - Albert Camus",
  // Add more quotes here
];

function displayRandomQuote() {
  console.log("displayRandomQuote called");
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  displayRandomQuote();
});