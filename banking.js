// handle deposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
  // get the ammount deposit 
  const depositInput = document.getElementById('diposit-input');
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);
  const depositTotal = document.getElementById('diposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositeTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositeTotal;

  // update account balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;



  // clear input er lekha
  depositInput.value = '';
})


// handle withdrow event 
document.getElementById('withdrow-button').addEventListener('click', function () {
  const withdrowInput = document.getElementById('withdrow-input');
  const withdrowAmountText = withdrowInput.value;
  const newWihtdrowAmount = parseFloat(withdrowAmountText)
  console.log(newWihtdrowAmount)
  // set withdrowTotal
  const withdrowTotal = document.getElementById('withdrow-total');
  const previousWithdrowText = withdrowTotal.innerText;
  const previousWithdrowTotal = parseFloat(previousWithdrowText);
  const newWihtdrowTotal = previousWithdrowTotal + newWihtdrowAmount;
  withdrowTotal.innerText = newWihtdrowTotal;
  // clear withdro=w input
  withdrowInput.value = '';


  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal - newWihtdrowAmount;
  balanceTotal.innerText = newBalanceTotal;

})

