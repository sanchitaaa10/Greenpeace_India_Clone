
document.querySelectorAll('input[name="amount"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.amount-group label').forEach(label => label.classList.remove('selected'));
    radio.parentElement.classList.add('selected');
  });
});


document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const fields = ['firstName', 'lastName', 'email', 'mobile', 'dob', 'pan', 'address', 'ifsc', 'accountType', 'accountNumber'];
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
    alert("Form submitted successfully! (This is a placeholder)");
    
  } else {
    alert("Please fill all required fields.");
  }
});
// const saveData = () => {
//   const firstName = document.getElementById("firstName").value;
//   const email = document.getElementById("email").value;
//   localStorage.setItem("donorData", JSON.stringify({ firstName, email }));
// };
document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your donation form was submitted (locally).");
});
