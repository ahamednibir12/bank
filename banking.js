// handle deposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
  // get the ammount deposit
  const depositInput = document.getElementById('diposit-input');
  const depositAmount = depositInput.value;
  console.log(depositAmount);
})