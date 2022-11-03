// グローバルナビ表示切り替え
const showGNav = () => {
  const gNav = document.querySelector('.js-header');
  let scrolledY = document.scrollingElement.scrollTop;
  if(scrolledY > 300) {
    gNav.classList.add('is-scrollIn');
  } else {
    gNav.classList.remove('is-scrollIn');
  }
}

window.addEventListener('scroll', showGNav);