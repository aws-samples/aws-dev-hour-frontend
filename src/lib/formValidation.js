function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName('is-danger');
  
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains('error')) {
      inputs[i].classList.remove('is-danger');
    }
  }

  // Field contains a value
  if (state.username && state.username.trim() === '') {
    document.getElementById('username').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.firstname && state.firstname.trim() === '') {
    document.getElementById('firstname').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.lastname && state.lastname.trim() === '') {
    document.getElementById('lastname').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.email && state.email.trim() === '') {
    document.getElementById('email').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.verificationcode && state.verificationcode.trim() === '') {
    document.getElementById('verificationcode').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.password && state.password.trim() === '') {
    document.getElementById('password').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.oldpassword && state.oldpassword.trim() === '') {
    document.getElementById('oldpassword').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.newpassword && state.newpassword.trim() === '') {
    document.getElementById('newpassword').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.confirmpassword && state.confirmpassword.trim() === '') {
    document.getElementById('confirmpassword').classList.add('is-danger');
    return { blankfield: true };
  }
  if (state.password && state.confirmpassword && state.password !== state.confirmpassword) {
    document.getElementById('password').classList.add('is-danger');
    document.getElementById('confirmpassword').classList.add('is-danger');
    return { passwordmatch: true };
  }
  if (state.newpassword && state.confirmpassword && state.newpassword !== state.confirmpassword) {
    document.getElementById('newpassword').classList.add('is-danger');
    document.getElementById('confirmpassword').classList.add('is-danger');
    return { passwordmatch: true };
  }
  return;
}

export default validateForm;