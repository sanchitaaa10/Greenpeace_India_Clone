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