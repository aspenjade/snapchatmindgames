const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateSelection() {
  cards.forEach((card, index) => {
    card.classList.toggle('selected', index === currentIndex);
  });
}

function next() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSelection();
}

function prev() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSelection();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

// Touch swipe
let touchStartX = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) next();
  if (touchEndX > touchStartX + 50) prev();
});

// Choose button
document.getElementById('choose-btn').addEventListener('click', () => {
  const chosen = cards[currentIndex].dataset.name;
  alert(`You chose the ${chosen}!`);
  // You can redirect or store choice here
});
