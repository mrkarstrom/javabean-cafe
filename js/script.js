document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');

  const btn = document.createElement('button');
  btn.textContent = 'Se dagens special';
  hero.appendChild(btn);

  btn.addEventListener('click', () => {
    alert('Dagens special: Kanelbulle med vaniljfyllning!');
  });
});
