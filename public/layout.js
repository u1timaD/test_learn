const POPUP = document.querySelector('.popup');

const changeShadowLayout = () => {
  if(document.body.classList.contains('shadow') && document.body.classList.contains('scroll-lock')) {
    document.body.classList.remove('shadow');
    document.body.classList.remove('scroll-lock');
  } else {
    document.body.classList.add('shadow');
    document.body.classList.add('scroll-lock');
  }
}


export { changeShadowLayout};