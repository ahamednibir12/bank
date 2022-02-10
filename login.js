document.getElementById('submit-btn').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // password feild
  const passwordFeild = document.getElementById('user-password');
  const userPassword = passwordFeild.value;
  if (userEmail == "ahamednibir639@gmail.com" && userPassword == 'nibir123') {
    window.location.href = 'banking.html'
  }
  else if (userEmail != 'ahamednibir639@gmail.com' && userPassword != 'nibir123') {
    alert('please enter right email and password')
  }
});


// handle deposit button

