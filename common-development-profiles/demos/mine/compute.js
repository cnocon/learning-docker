document.addEventListener('DOMContentLoaded', () => {
  const radius = 5.0;
  const area = Math.pow(radius, 2) * Math.PI;
  const paragraph = document.createElement('p');
  const sup = document.createElement('sup');
  sup.innerText = `2`;
  paragraph.innerText = `Area of a ${radius} cm disk: ${area} cm`;
  paragraph.appendChild(sup);
  document.getElementById('body').appendChild(paragraph);
})