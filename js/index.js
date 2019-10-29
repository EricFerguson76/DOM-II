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
