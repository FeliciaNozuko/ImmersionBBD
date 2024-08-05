document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function (response) {
        document.getElementById("successMessage").classList.remove("hidden");
      },
      function (error) {
        console.error("Failed to send email", error);
      }
    );
  });
function applyButton() {
  document.getElementById("applyButton");
  applyButton.addEventListener("click", function () {
    window.location.href = "";
  });
}
