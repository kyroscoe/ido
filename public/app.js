// Inquiry delivery is not connected; never claim a message was sent.
const form = document.querySelector('#inquiry-form');

if (form) {
  const result = document.querySelector('#form-result');
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    result.textContent = 'Your details are complete, but this form is not connected and nothing has been sent or saved. Please email hello@idocoordinationandevents.com or call (740) 707-1821 to inquire.';
    result.focus();
  });

  // Enable after the local validation handler is attached.
  submit.disabled = false;
}
