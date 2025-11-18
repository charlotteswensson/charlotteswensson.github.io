document.addEventListener('DOMContentLoaded', () => {
  const newsletterSubscribeForm = document.getElementById('newsletter-subscribe');
  const newsletterSubscribeSucceeded = document.getElementById('newsletter-subscribe-succeeded');
  const newsletterSubscribeFailed = document.getElementById('newsletter-subscribe-failed');

  newsletterSubscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newsletterSubscribeForm);
    fetch(newsletterSubscribeForm.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          newsletterSubscribeForm.classList.toggle('hidden');
          newsletterSubscribeSucceeded.classList.toggle('hidden');
          newsletterSubscribeForm.reset();
        } else {
          newsletterSubscribeFailed.classList.toggle('hidden');
        }
      })
      .catch(() => {
        newsletterSubscribeFailed.classList.toggle('hidden');
      });
  });
});
