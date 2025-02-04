function displayQuote(response) {
  //console.log("Quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-prompt");
  let userInputFormatted = userInput.value
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  let apiKey = "tb561b9af40b32focb07736aa7b1c96e";
  let prompt = `Generate a profound quote about ${userInput.value}`;
  let context = `You are an expert on witty, sarcastic and inspirational quotes. You love to write short and profound quotes to inspire people and help them feel energized and motivated. Your mission is to generate an inspiring and wise quote in 2 lines in basic HTML, e.g. <p>this is a quote<p>. Separate each line with a <br />. Do not use markdown. Do not add unnecessary empty lines. Make sure to follow the user instructions. Add an author/a famous person of your choice in the fifth line that you credit the quote to in the format <strong>- Coco Chanel on "${userInputFormatted}"</strong>. Choose a famous celebrity, artist, actor, musician other than Coco Chanel.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElementVisibility = document.querySelector("#quote");
  quoteElementVisibility.classList.remove("hidden");

  quoteElementVisibility.innerHTML = `<div class="generating">⏳ Gathering profound thoughts about ${userInput.value}...</div>`;

  //console.log("Generating quote");
  //console.log(`Prompt: ${prompt}`);
  //console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
