// Factories
const FACTORY_TOGGLER = (selector, className = "active") => {
  selector.forEach((el) => {
    el.onclick = () => {
      selector.forEach((ele) => {
        ele.classList.remove(className);
      });
      el.classList.add(className);
    };
  });
};
const FACTORY_SCROLL_TO = (target) => {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};
const SELECTOR = (target) => {
  const el = document.querySelectorAll(target);
  let result;
  // MORE_THAN_ONE
  if (el.length > 1) {
    result = el;
  } else {
    // JUST_ONE
    result = el[0];
  }

  return result;
};
// Funcitons

// Init
function initScript() {
  // onMount
  window.addEventListener("DOMContentLoaded", function () {
    // functions
  });
  // onScroll
  window.addEventListener("scroll", function () {
    // functions
  });
}
initScript();
