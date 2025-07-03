// Get the hero section
const hero = document.querySelector('.hero');

// Add event listener to the hero button
hero.querySelector('button').addEventListener('click', () => {
  // Add fade-in animation to the features section
  const features = document.querySelector('.features');
  features.classList.add('fade-in');
});

// Add event listener to the window for smooth scrolling
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Add smooth transition to the header
  const header = document.querySelector('header');
  header.classList.add('smooth-transition');

  // Check if the user has scrolled to the bottom of the page
  if (scrollPosition + window.innerHeight >= document.body.offsetHeight) {
    // Add fade-in animation to the footer
    const footer = document.querySelector('footer');
    footer.classList.add('fade-in');
  }
});