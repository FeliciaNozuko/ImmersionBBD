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
  const okButton = document.querySelector('.ok-button');

  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.style.display = 'block';

  closeButton.onclick = function () {
    modal.style.display = 'none';
  };

  okButton.onclick = function () {
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
      showModal(
        'Attendance',
        "Great news! Since you're in Gauteng, you can attend the event in person. We look forward to seeing you there!"
      );
    } else {
      showModal(
        'Attendance',
        "Thank you for your interest in the event. Since you're located outside Gauteng, you can join us virtually. However, you're more than welcome to join us in person at your own cost"
      );
    }
  });
