import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', clickImg);

// **********************
function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        }).join('');
}

// *** modal ***
function clickImg(e) {
    e.preventDefault();

    const temp = e.target.classList.contains('gallery__image');
    if (!temp) return;

    const tempData = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${tempData}" width="1280" height="auto"/>`);
    instance.show();

}
//******************************************************
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

// lightbox = $('.gallery a').simpleLightbox({ /* options */ });

