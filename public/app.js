const form = document.querySelector('#inquiry-form');

if (form) {
  const result = document.querySelector('#form-result');
  const submit = form.querySelector('button[type="submit"]');
  let submitting = false;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    result.textContent = 'Sending your inquiry...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error('Inquiry submission failed');
      form.reset();
      result.textContent = 'Thank you! Your inquiry has been sent. We will be in touch to discuss your celebration. Your date is not reserved until booking is confirmed.';
    } catch {
      result.textContent = 'We could not confirm your inquiry was sent. Please try again, email hello@idocoordinationandevents.com, or call (740) 707-1821.';
    } finally {
      submitting = false;
      submit.disabled = false;
      form.removeAttribute('aria-busy');
      result.focus();
    }
  });
}
