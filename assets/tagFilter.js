const tags = document.querySelectorAll('.tags-menu a');
const url = window.location.href;

tags.forEach((tag) => {
  if (tag.href === url) {
    tag.setAttribute('aria-current', 'true');
  }
});
