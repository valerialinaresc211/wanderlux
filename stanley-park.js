<script>
// Simple Scroll Animation with IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.5 }); // Triggers when 50% of the element is visible

  elements.forEach(element => observer.observe(element));
});
</script>