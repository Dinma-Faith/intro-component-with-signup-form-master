const form = document.getElementById("signupForm");
const fields = ["firstName", "lastName", "email", "password"];
const submitButton = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let hasError = false;

  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");

    if (!input.value.trim()) {
      error.textContent = `${input.placeholder} cannot be empty.`;
      hasError = true;
    } else {
      error.textContent = "";
    }
  });

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value && !emailPattern.test(emailInput.value)) {
    emailError.textContent = "Looks like this is not a valid email.";
    hasError = true;
  }

  if (hasError) {
    fields.forEach(field => {
      document.getElementById(field).classList.add("error");
    });

    submitButton.classList.add("disabled");
    submitButton.disabled = true;
  } else {
    fields.forEach(field => {
      const input = document.getElementById(field);
      const error = document.getElementById(field + "Error");
      input.classList.remove("error");
      error.textContent = "";
    });

    submitButton.classList.remove("disabled");
    submitButton.disabled = false;

    alert("Form submitted successfully!");
    form.reset();
  }
});
