document
  .getElementById('applicationForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this).then(
      function (response) {
        document.getElementById('successMessage').classList.remove('hidden');
      },
      function (error) {
        console.error('Failed to send email', error);
      }
    );
  });
function applyButton() {
  document.getElementById('applyButton');
  applyButton.addEventListener('click', function () {
    window.location.href = 'apply.html';
  });
}

document.getElementById('province').addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  switch (selectedValue) {
    case 'Gauteng':
      alert(`You can attend the event in person`);
      break;
    default:
      alert(
        `You're only eligible to attend the event virtually, because you're outside of Gauteng`
      );
  }
});
