const depositinput = document.getElementById("deposit-amount");
const withdrawinput = document.getElementById("withdraw-amount");

const depositbtn = document.getElementById("deposit-btn");
const withdrawbtn = document.getElementById("withdraw-btn");
const totalamountspan = document.getElementById("total-amount");

const historylist = document.getElementById("history");

let total = 0;

depositbtn.addEventListener("click", function () {
  const amount = Number(depositinput.value);
  if (amount <= 0 || isNaN(amount)) {
    alert("Enter a valid amount to deposit");
    return;
  }
  total += amount;
  updateTotal();
  addToHistory("Deposit", amount);
  depositinput.value = "";
});
withdrawbtn.addEventListener("click", function () {
  const amount = Number(withdrawinput.value);
  if (amount <= 0 || isNaN(amount)) {
    alert("Enter a valid amount to withdraw");
    return;
  }
  if (amount > total) {
    alert("Insufficient Balance");
  }
  total -= amount;
  updateTotal();
  addToHistory("Withdraw", amount);
  withdrawinput.value = "";
});
function addToHistory(type, amount) {
  const li = document.createElement("li");
  if (type === "Deposit") {
    li.className = "text-green-600 font-bold";
  } else {
    li.className = "text-red-600 font-bold";
  }
  const delbtn = document.createElement("button");
  delbtn.innerHTML = <i class="fa-solid fa-trash"></i>;

  li.innerText = `${type}: ${amount}BDT`;
  historylist.prepend(li);
}
function updateTotal() {
  totalamountspan.innerText = total;
}
