const url = 'https://www.42frases.com.br/wp-content/uploads/2020/09/voce-ora-deus-ouve.jpg'
const btn = document.querySelector('#btn')

function openInNewTab(url) {
const win = window.open(url, 'blank')
win.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";

  }
}
