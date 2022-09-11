const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');
  console.log(galleryEl);

const markup = images
  .map(image => 
  `<li><a href="#"><img class="picture-js" src="${image.url}" alt="${image.alt}" ></a></li></li>`
)
  .join("")
console.log(markup);

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.classList.add('gallery-js');


const headRef = document.querySelector('head');

const style = `<style>
      .gallery-js {
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
      }

      .picture-js {
        max-width: 100vw;
      }
    </style>`

headRef.insertAdjacentHTML('beforeend', style)