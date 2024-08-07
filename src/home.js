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

function showModal(title, message) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const closeButton = document.querySelector('.close');

  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.style.display = 'block';

  closeButton.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}

document
  .getElementById('province')
  .addEventListener('change', function (event) {
    const selectedValue = event.target.value;

    if (selectedValue === '') {
      showModal('Selection Required', 'Please select a province.');
    } else if (selectedValue === 'Gauteng') {
      showModal('Attendance', 'You can attend the event in person.');
    } else {
      showModal(
        'Attendance',
        "You're only eligible to attend the event virtually, because you're outside Gauteng."
      );
    }
  });
