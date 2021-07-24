const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const telEl = document.getElementById('telephone');

const form = document.querySelector('#signup');


const checkUsername = () => {

  let valid = false;

  const min = 3,
    max = 16;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'First name cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `First name must be alphanumeric and contain ${min} and ${max} characters.`)
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};
const CheckPhone = () => {

  const valPhone = telEl.value.trim();
  if (!isRequired(valPhone)) {
    showError(telEl, 'A telephone number(11 digit and 333-333-3334');
  } else if (!isPhone(valPhone)) {
    showError(telEl, 'not valid')
  }
  else {
    showSuccess(valPhone);
    return false;
  }
}
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email address must b valid address, e.g example@example.com')
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};


const checkPassword = () => {
  let valid = false;


  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'Please enter the password again');
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'The password does not match');
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

const isPhone = (telephone) => {
  const tre = /^\d{10}$/;
  return tre.test(telephone)
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}


form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword
      (),
    isPhone = CheckPhone();

  let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isPhone;

  // submit to the server if the form is valid
  if (isFormValid) {

  }
});


const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'username':
      checkUsername();
      break;
    case 'email':
      checkEmail();
      break;
    case 'password':
      checkPassword();
      break;
    case 'confirm-password':
      checkConfirmPassword();
      break;
  }
}));