const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    response.textContent = "YAYYYYY ❤️ I knew you'd say yes!";
});

noBtn.addEventListener("click", () => {
    alert("Error 404: 'No' button not supported 😤");
});
