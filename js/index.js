// Your code goes here

//DOUBLE CLICK EVENT

const changeImg = document.querySelector('img');
changeImg.addEventListener('dblclick', () => {
  changeImg.src = 'img/beachbus.jpg';
});

// MOUSEENTER AND MOUSELEAVE EVENTS
const funImage = document.querySelector('.content-destination img');

funImage.addEventListener('mouseenter', () => {
  funImage.style.transform = 'scale(1.3)';
  funImage.style.transition = 'all 0.4s';
});

funImage.addEventListener('mouseleave', () => {
  funImage.style.transform = 'scale(1.0)';
  funImage.style.transition = 'all 0.4s';
});

// CLICK EVENT
document.querySelectorAll('.text-content').forEach(el => {
  el.addEventListener('click', () => {
    el.style.color = '#00BFFF';
  });
});

// RESIZE
const adventureImg = document.querySelector('.img-content img');
window.addEventListener('resize', () => {
  adventureImg.src = 'img/kidwithmap.jpg';
});

// SCROLL
window.addEventListener('scroll', () => {
  document.body.style.backgroundColor = '#B0C4DE';
});

// WHEEL EVENT
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  adventure.style.transform = `scale(${scale})`;
}
let scale = 1;
const adventure = document.querySelector('.img-fluid');
adventure.onwheel = zoom;

adventure.addEventListener('wheel', zoom);

// MOUSEOVER AND MOUSEOUT
const destination1 = document.querySelector('.destination p');

destination1.addEventListener('mouseover', () => {
  destination1.style.transform = 'scale(1.3)';
  destination1.style.transition = 'all 0.4s';
});

destination1.addEventListener('mouseout', () => {
  destination1.style.transform = 'scale(1.0)';
  destination1.style.transition = 'all 0.4s';
});

// FOCUS
const navSection = document.querySelectorAll('a');

navSection.forEach(aSection => {
  aSection.addEventListener('focus', () => {
    aSection.style.background = 'orange';
  });
});
