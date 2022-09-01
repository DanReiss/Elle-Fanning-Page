
const menuItems = document.querySelectorAll('#navsec a[href^="#"]');

menuItems.forEach(item =>{
  item.addEventListener('click', scrollToId);
});

function scrollToId(event){
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
  window.scroll(0, to);
}

const WorksList = document.querySelectorAll('.movieslist')

WorksList.forEach(item =>{
  item.addEventListener('mouseover', Hide);
  console.log(item.id)
});

console.log(WorksList[0])

console.log(WorksList)

function Hide(){
  if(item.id === 'movie1'){
    item.style.display = 'none';
  }
}

function Show(){
  if(true){
  }
}
const h1Men = document.getElementById('h1main')
const teste = document.getElementById('h1main').addEventListener('click', functionTeste)

function functionTeste(){
  h1Men.style.display = 'none'
}

const imagesGallery = document.querySelectorAll('#gallery');
const nxtBtn = [...document.querySelectorAll('.arrow-right')];
const bckBtn = [...document.querySelectorAll('.arrow-left')];

imagesGallery.forEach((item, i) => {
  let GalleryDimensions = item.getBoundingClientRect();
  let GalleryWidth = GalleryDimensions.width;

  nxtBtn[i].addEventListener('click', () =>{
    item.scrollLeft += GalleryWidth;
  });

  bckBtn[i].addEventListener('click', () =>{
    item.scrollLeft -= GalleryWidth;
  });
});



