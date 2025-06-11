
const totalDonation = 7500;
const goalAmount = 10000;
const impacts = [
  "🌱 You planted 50 trees in Maharashtra",
  "🚰 Helped build 2 clean water tanks in Rajasthan",
  "📚 Sponsored 3 kids' school kits for a year",
  "🐘 Supported wildlife rescue team for one week"
];


document.getElementById("totalDonated").textContent = totalDonation;


const progressPercent = (totalDonation / goalAmount) * 100;
document.getElementById("progress").style.width = progressPercent + "%";


const impactList = document.getElementById("impactList");
impacts.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  impactList.appendChild(li);
});


function shareImpact() {
  alert("Your impact card has been copied! Share it with your friends ❤️");
}
