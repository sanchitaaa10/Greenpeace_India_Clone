const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closeFormBtn");
    const modal = document.getElementById("popupForm");
    const steps = document.querySelectorAll(".form-step");
    let currentStep = 0;

    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
      });
    }

    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }

    function prevStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    }





  function nextStep(step) {
    const current = document.querySelector('.form-step.active');
    const inputs = current.querySelectorAll('input, select, textarea');
    for (const input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }
    current.classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
  }

  function prevStep(step) {
    document.querySelector('.form-step.active').classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
  }

  // Handle final submission
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Check Step 3 validation
    const current = document.querySelector('.form-step.active');
    const inputs = current.querySelectorAll('input, select, textarea');
    for (const input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }

    // Replace form with Thank You message
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
      <h2 style="text-align:center; color:green;">Thank you for submitting!</h2>
      <p style="text-align:center;">We appreciate your interest in volunteering with Greenpeace South Asia.</p>
    `;
  });

