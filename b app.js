
let balance = 0;

const pages = {
  dashboard: [
    "Welcome to Elovanta",
    "Your activity and rewards dashboard."
  ],
  surveys: [
    "Surveys and Tasks",
    "Sample survey listings will appear here."
  ],
  wallet: [
    "My Wallet",
    "View your demo reward balance."
  ],
  memberships: [
    "Membership Plans",
    "Free, Starter, Plus and Pro."
  ],
  referrals: [
    "Refer Friends",
    "Share Elovanta with your friends."
  ]
};

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.page;

    document.getElementById("heading").textContent =
      pages[name][0];

    document.getElementById("content").textContent =
      name === "wallet"
        ? "Your demo balance is ₹" + balance + "."
        : pages[name][1];

    document.getElementById("message").textContent = "";
  });
});

document.getElementById("earn").addEventListener("click", () => {
  balance += 3;

  document.getElementById("balance").textContent = balance;

  document.getElementById("heading").textContent =
    "Reward received";

  document.getElementById("content").textContent =
    "Your demo balance is ₹" + balance + ".";

  document.getElementById("message").textContent =
    "₹3 demo reward added successfully.";
});
