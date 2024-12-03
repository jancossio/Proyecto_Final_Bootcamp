
document.addEventListener('DOMContentLoaded', () => {
    const appearElements = document.querySelectorAll('.appear');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); 
          observer.unobserve(entry.target);  
        }
      });
    }, {
      threshold: 0.2, 
    });
  
    appearElements.forEach(element => observer.observe(element));
  });