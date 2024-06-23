document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    themeToggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  
    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    };
  
    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : indicators.length - 1;
      updateCarousel();
    });
  
    document.querySelector('.carousel-control.next').addEventListener('click', () => {
      currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    updateCarousel();
  });
  