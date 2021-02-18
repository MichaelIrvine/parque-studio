const tags = document.querySelectorAll('.tags-menu a');
const url = window.location.href;
console.log('dogs');

tags.forEach((tag) => {
  if (tag.href === url) {
    console.log(`${tag} is active link`);
    tag.setAttribute('aria-current', 'true');
  }
});
