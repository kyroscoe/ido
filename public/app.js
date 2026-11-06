// Client-review mode: no transmission or storage of inquiry information.
const form = document.querySelector('#inquiry-form');

if (form) {
  const result = document.querySelector('#form-result');
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    result.textContent = 'Your preview inquiry is complete. Nothing has been sent or saved, and your date has not been reserved. Live delivery will be connected after Christyn confirms the receiving email and response time.';
    result.focus();
  });

  // Enable only after the preview handler is attached.
  submit.disabled = false;
}
