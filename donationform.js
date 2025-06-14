// Highlight selected amount option
document.querySelectorAll('input[name="amount"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.amount-group label').forEach(label => label.classList.remove('selected'));
    radio.parentElement.classList.add('selected');
  });
});

// Handle form submission
document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fields = [
    'firstName', 'lastName', 'email', 'mobile',
    'dob', 'pan', 'address', 'ifsc', 'accountNumber'
  ];

  let isValid = true;

  fields.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.style.borderColor = 'red';
      isValid = false;
    } else {
      field.style.borderColor = '#ccc';
    }
  });

  const checkbox = document.getElementById('citizenCheck');
  if (!checkbox.checked) {
    alert("Please confirm you're an Indian citizen and agree to the declaration.");
    return;
  }

  if (isValid) {
    alert("Thanks for verification!\nThanks for donating!");
    // Redirect after alert
    window.location.href = 'index.html';
  } else {
    alert("Please fill all required fields.");
  }
});
