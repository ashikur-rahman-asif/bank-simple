document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(newWithdrawAmount)
  const withdrawTotalelement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalelement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalelement.innerText = currentWithdrawTotal;

    const balanceTotalelement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalelement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalelement.innerText = newBalanceTotal
    

  withdrawField.value = "";
});
