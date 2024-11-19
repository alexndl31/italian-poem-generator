function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Lassu sulle montagne",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let formPoemElement = document.querySelector("#form-for-poem");
formPoemElement.addEventListener("submit", generatePoem);
