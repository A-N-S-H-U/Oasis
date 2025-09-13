// Smooth Scroll, Interactivity Demo
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if(href.startsWith('#')) {
      document.querySelector(href).scrollIntoView({behavior: "smooth"});
    }
  });
});