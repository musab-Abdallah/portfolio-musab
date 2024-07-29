const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
menu.addEventListener("click", () => {
  handulemenu();
})
function handulemenu() {
 menu.classList.toggle("is-active")
 actions.classList.toggle("is-active")
}
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
      link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
          top: offsetTop,
          behavior: 'smooth'
      });
  }
});
new WOW().init();
