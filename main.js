const images = ['media/gphotos (7).jpg', 'media/gphotos (3).jpg', 'media/gphotos (1).jpg'];
let index = 0;
const slideshowContainer = document.getElementById('blur-background');

function changeImage() {
  slideshowContainer.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
  setTimeout(changeImage, 2000); // Change image every 5 seconds
}

changeImage();

