function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "The quote will go here",
    autoStart: true,
    delay: 50,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
