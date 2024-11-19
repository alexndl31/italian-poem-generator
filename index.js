function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "4t7d303d7c1ea2908b8dfea4coaff2b4";
  let prompt = `User instructions:Generate an Italian poem about ${instructionsInput.value}`;
  let context = `You are a romantic and a poem expert and you love to write short poems.Separate each line with a </br>.Your mission is to generate a 4 line poem in basic HTML.Do not show the word html .Make sure you fallow the user instructions.Sign the poem with Your favorite Italian AI.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="thinking">
      Generating an Italian poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let formPoemElement = document.querySelector("#form-for-poem");
formPoemElement.addEventListener("submit", generatePoem);
