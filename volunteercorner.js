

function nextStep() {
  const current = document.querySelector(".form-step.active");
  const next = current.nextElementSibling;
  if (!next) return;

  const inputs = current.querySelectorAll("input, select, textarea");
  for (const input of inputs) {
    if (!input.checkValidity()) {
      input.setCustomValidity("Please fill out this field");
      input.reportValidity();
      return;
    }
    input.setCustomValidity(""); 
  }

  current.classList.remove("active");
  next.classList.add("active");
}



function prevStep() {
  const current = document.querySelector(".form-step.active");
  const prev = current.previousElementSibling;
  if (!prev) return;

  current.classList.remove("active");
  prev.classList.add("active");
}



const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const current = document.querySelector(".form-step.active");
  const inputs = current.querySelectorAll("input, select, textarea");

  for (const input of inputs) {
    if (!input.checkValidity()) {
      input.setCustomValidity("Please fill out this field");
      input.reportValidity();
      return;
    }
    input.setCustomValidity(""); 
  }

  
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `
    <h2 style="text-align:center; color:green;">Thank you for submitting!</h2>
    <p style="text-align:center;">We appreciate your interest in volunteering with Greenpeace South Asia.</p>
  `;
});


document.getElementById("openFormBtn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});


window.addEventListener("click", function (e) {
  const modal = document.getElementById("popupForm");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


document.querySelector(".close-btn")?.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});
