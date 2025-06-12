

  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    

   
    const msg = document.createElement("p");
    msg.textContent = "Thanks for submitting!";
    msg.style.color = "green";
    msg.style.marginTop = "20px";
    this.appendChild(msg);

    
   
    this.reset();
  });






const openBtn = document.getElementById("openImpactBtn");
const closeBtn = document.getElementById("closeImpactBtn");
const modal = document.getElementById("impactModal");

const popupTotal = document.getElementById("popupTotal");
const popupProgress = document.getElementById("popupProgress");
const popupImpactList = document.getElementById("popupImpactList");


const total = 7500;
const goal = 10000;
const impactItems = [
  "🌳 Planted 50 trees in Maharashtra",
  "🚿 Built 2 water tanks in Rajasthan",
  "🎒 Supported school kits for 3 kids",
  "🐘 Helped rescue a baby elephant"
];


openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  popupTotal.textContent = total;
  popupProgress.style.width = `${(total / goal) * 100}%`;

  
  popupImpactList.innerHTML = "";
  impactItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    popupImpactList.appendChild(li);
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


function shareImpact() {
  // Construct the impact summary string
  const summary = `🌿 Total Donations: ₹${total} / ₹${goal}\n\nImpact Achieved:\n- ${impactItems.join('\n- ')}`;

  // Copy to clipboard
  navigator.clipboard.writeText(summary).then(() => {
    alert("🎉 Impact summary copied! Ready to share.");
  }).catch(err => {
    alert("❌ Failed to copy impact summary.");
    console.error(err);
  });
}
