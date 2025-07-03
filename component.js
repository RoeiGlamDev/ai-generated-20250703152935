// Create a reusable component for the features section
class Feature {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  render() {
    const feature = document.createElement('li');
    feature.innerHTML = `
      <h3>${this.title}</h3>
      <p>${this.description}</p>
    `;
    return feature;
  }
}

// Create a list of features
const featuresList = [
  new Feature('Responsive Design', 'Our application is fully responsive and works on all devices.'),
  new Feature('Smooth Animations', 'We use smooth animations to enhance the user experience.'),
  new Feature('Proper Error Handling', 'Our application handles errors properly and provides user feedback.'),
];

// Render the features list
const featuresSection = document.querySelector('.features ul');
featuresList.forEach((feature) => {
  featuresSection.appendChild(feature.render());
});