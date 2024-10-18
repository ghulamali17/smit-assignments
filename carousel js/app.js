let imgs = document.getElementById('carousel'); 
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let images = ['./images/img1.jpeg', './images/img2.jpg', './images/img3.jpg'];  
let currIndex = 0;  
function changeImage() {
    currIndex++; 
    if (currIndex >= images.length) {
        currIndex = 0;
    }
    imgs.src = images[currIndex];
}
next.addEventListener('click', () => {
    currIndex++;
    if (currIndex >= images.length) {
        currIndex = 0;
    }
    imgs.src = images[currIndex];
});

prev.addEventListener('click', () => {
    currIndex--;
    if (currIndex < 0) {
        currIndex = images.length - 1;
    }
    imgs.src = images[currIndex];
});
setInterval(changeImage, 3000);
