const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;
  if (emailValue.length === 0 || passwordValue.length === 0) {
    alert("Всі поля повинні бути заповнені!");
  }

  const formValue = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formValue);

  formEl.reset();
}
