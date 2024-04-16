// Modal income
const incomeModal = document.getElementById("income-modal");
const openIncomeModalBtn = document.getElementById("show-income-modal");

openIncomeModalBtn.addEventListener("click", () => {
  incomeModal.showModal();
});

incomeModal.addEventListener("mousedown", (event) => {
  if (event.target === incomeModal) {
    incomeModal.close();
  }
});

// Modal outcome
const outcomeModal = document.getElementById("expense-modal");
const openBtn = document.getElementById("show-expense-modal");

openBtn.addEventListener("click", () => {
  outcomeModal.showModal();
});

outcomeModal.addEventListener("mousedown", (event) => {
  if (event.target === outcomeModal) {
    outcomeModal.close();
  }
});
