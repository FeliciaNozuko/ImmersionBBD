document.getElementById("applicationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
    .then(response => response.text())
    .then(data => {
      document.getElementById("successMessage").classList.remove("hidden");
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
