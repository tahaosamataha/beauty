document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('custom-marquee-input');
  const marqueeText = document.getElementById('custom-marquee-text');

  if (!input || !marqueeText) return;

  input.addEventListener('input', () => {
    marqueeText.textContent = input.value || 'مرحباً بكم في Beauty Theme!';
  });
});
