const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');;

function serve(e) {
  for (i = 0; i < tabItem.length; i++) {
    const item = tabItem[i];
    item.classList.remove('tab-border');
  }
  this.classList.add("tab-border");
  removeShow();
  document.querySelector(`#${this.id}-content`).classList.add('show');
}



function removeShow() {
  tabContentItem.forEach(item => item.classList.remove('show'));
}

tabItem.forEach((item) => {
  item.addEventListener('click', serve);
});