
document.getElementById("applicationForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const formData = {
    email: document.getElementById("email").value,
    fullName: document.getElementById("fullName").value,
    cohort: document.getElementById("cohort").value,
    province: document.getElementById("province").value,
  };

  
  fetch('http://localhost:5000/api/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      
      const successMessage = document.getElementById('successMessage');
      if (successMessage) {
        successMessage.textContent = data.message;
        successMessage.classList.remove('hidden');
        successMessage.style.color = 'green';
      } else {
        console.warn('Element with ID successMessage not found.');
      }
    })
    .catch(error => {
      
      console.error('Failed to send application', error);
      const errorMessage = document.getElementById('successMessage');
      if (errorMessage) {
        errorMessage.textContent = 'There was an error submitting your application.';
        errorMessage.style.color = 'red';
        errorMessage.classList.remove('hidden');
      }
    });
});


function applyButton() {
  const applyBtn = document.getElementById("applyButton");
  if (applyBtn) {
    applyBtn.addEventListener("click", function () {
      window.location.href = "apply.html";
    });
  }
}


function showModal(title, message) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const closeButton = document.querySelector('.close');
  const okButton = document.querySelector('.ok-button');

  if (modal && modalTitle && modalMessage) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'block';
  }

  if (closeButton) {
    closeButton.onclick = function () {
      modal.style.display = 'none';
    };
  }

  if (okButton) {
    okButton.onclick = function () {
      modal.style.display = 'none';
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}


document.getElementById('province').addEventListener('change', function (event) {
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
      "Thank you for your interest in the event. Since you're located outside Gauteng, you can join us virtually. However, you're more than welcome to join us in person at your own cost."
    );
  }
});
