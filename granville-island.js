document.addEventListener('DOMContentLoaded', function () {
  const headerContent = document.querySelector('.header-content');
  headerContent.classList.add('animate-header');

  // Add animation effect to card images on hover
  const cards = document.querySelectorAll('.attraction-card');
  cards.forEach(card => {
    card.addEventListener('mouseover', function () {
      card.style