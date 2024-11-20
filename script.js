// let currentImageIndex = 0;

// function changeImage(delta) {
//     const images = document.querySelectorAll('.slider img');
//     images.forEach(img => img.style.display = 'none');
//     currentImageIndex = (currentImageIndex + images.length + delta) % images.length;
//     images[currentImageIndex].style.display = 'block';
// }

// const prevButton = document.getElementById('prev');
// prevButton.addEventListener('click', () => changeImage(-1));

// const nextButton = document.getElementById('next');
// nextButton.addEventListener('click', () => changeImage(1));



const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display ='none';
        
    }
    imgs[n].style.display ='block';
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    if(n>0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
 });

 next_btn.addEventListener('click', (e) => {
    if(n< imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
 });


 