// Highlight selected donation amount
const amountRadios = document.querySelectorAll('input[name="amount"]');
amountRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    amountRadios.forEach(r => r.parentElement.classList.remove('selected'));
    radio.parentElement.classList.add('selected');
  });
});

// Validate form before proceeding
document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  // Basic validation
  const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'dob', 'pan', 'address', 'ifsc', 'accountType', 'accountNumber'];
  let valid = true;
  requiredFields.forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      input.style.borderColor = 'red';
      valid = false;
    } else {
      input.style.borderColor = '#ccc';
    }
  });

  const isCitizenChecked = document.getElementById('citizenCheck').checked;
  if (!isCitizenChecked) {
    alert('Please confirm you are an Indian citizen and agree to the declaration.');
    return;
  }

  if (valid) {
    alert('Form submitted successfully! (Functionality placeholder)');
    // Here you could send data to your backend via fetch/AJAX
  } else {
    alert('Please fill out all required fields.');
  }
});
