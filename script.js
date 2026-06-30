// Selects all images with the class 'draggable'
const images = document.querySelectorAll('.draggable');

images.forEach(img => {
  let isDragging = false;
  let offsetX, offsetY;

  // When mouse is pressed down on the image
  img.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - img.offsetLeft;
    offsetY = e.clientY - img.offsetTop;
    img.style.cursor = 'grabbing'; 
  });

  // When mouse is moved
  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      img.style.left = (e.clientX - offsetX) + 'px'; 
      img.style.top = (e.clientY - offsetY) + 'px';  
    }
  });

  // When mouse is released
  document.addEventListener('mouseup', function () {
    isDragging = false;
    img.style.cursor = 'grab'; 
  });

  // Randomize initial position of each image when the page loads
  window.onload = function () {
    const randomX = Math.random() * (window.innerWidth - img.offsetWidth); 
    const randomY = Math.random() * (window.innerHeight - img.offsetHeight); 

    img.style.position = 'absolute'; 
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';
  };
});