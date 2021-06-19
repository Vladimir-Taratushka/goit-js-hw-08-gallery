import images from './gallery-items.js'


  const refs ={
      galleryList :document.querySelector(".js-gallery"),
      lightBoxContainer : document.querySelector('.lightbox'),
      closeLightBox: document.querySelector('.lightbox__button'),
      galleryImage : document.querySelector('.gallery__image'),
      currentImage: document.querySelector('.lightbox__image')
  }

function createListOfImagesMarkup(images) { 
  return images.map(({preview,original, description}) => {
      return `
        <li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
 `
 
 }).join('');
};
const imagesMarkup = createListOfImagesMarkup(images);
refs.galleryList.insertAdjacentHTML('afterbegin',imagesMarkup);
refs.galleryList.addEventListener('click',onGalleryListClick);
refs.closeLightBox.addEventListener('click',onLightBoxClose);


// refs.lightBoxContainer .addEventListener('click',onBackdropClick);

function onGalleryListClick(event){
    event.preventDefault();
   
    if(event.target.classList.contains('gallery__image')){
       window.addEventListener('keydown', onEscKeyPress);
       refs.lightBoxContainer.classList.add("is-open");  
      return refs.currentImage.src = event.target.dataset.source;  
    
}
}

function onLightBoxClose (event) {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.lightBoxContainer.classList.remove("is-open");
    
}


function onEscKeyPress (event){
    if(event.code === 'Escape'){
    onLightBoxClose ();
    console.log(event);
}
}
// function onBackdropClick (event){

    
//     console.log(event.currentTarget);
//     console.log(event.target);
    
//     if(event.currentTarget === event.target ){
//     console.log('Клик именно  в backdrop');
//     onLightBoxClose();
// }
// }