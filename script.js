//choose a random quote from array

const codingQuotes = [
  "Coding is today's language of creativity. All our dreams can come true if we have the courage to code.",
  "Learning to code is like gaining a superpower. You can create something out of nothing.",
  "Coding is a universal language that transcends borders and connects people worldwide.",
  "Coding is the key to unlocking a world of endless possibilities.",
];

const randomQuote =
  codingQuotes[Math.floor(Math.random() * codingQuotes.length)];

document.querySelector("#quote").innerText = randomQuote;
