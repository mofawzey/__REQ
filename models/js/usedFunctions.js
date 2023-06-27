/**
 * 1-toggle between more than 2 boxes activeClass
 * 2-scrollToTarget
 * 3-selectElement (one,moreThanOne)
 * 4-toggle Navbar box-shadow | padding
 * 5-toggle navBarLinksOnSection
 * 6-initScrollSpy USing Bootstrap | Advanced
 * 7-closeNavBarItems after navBarLink Clicked
 * 8-showFormError on submit
 * __initScript
 */

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
const toggleNavBar = () => {
  const navBar = document.querySelector("nav.navbar");
  const state = 0;
  if (window.scrollY > state) {
    // LG_AND_UP
    navBar.style.padding = "0.5rem 0";
    navBar.classList.add("shrink");
    // MD_AND_DOWN
  } else {
    navBar.classList.remove("shrink");
    navBar.style.padding = "1.5rem 0";
  }
};

const activeNavigationLinks = () => {
  const links = document.querySelectorAll("nav.navbar .nav-link");
  const sections = document.querySelectorAll("section:not(#start-bootstrap)");
  sections.forEach((section) => {
    const sectionTopOffset = window.scrollY >= section.offsetTop - 50;
    const sectionHeightOffset =
      window.scrollY < section.offsetTop + section.offsetHeight;
    const sectionState = sectionTopOffset && sectionHeightOffset;
    const link = document.querySelector(`[data-section='${section.id}']`);
    if (sectionState) {
      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const initScrollSpy = () => {
  new bootstrap.ScrollSpy(document.body, {
    target: "#main-nav",
    rootMargin: "0px 0px -40%",
  });
};

const closeNavBarItems = () => {
  const navBarItems = SELECTOR("#navbarNav");
  const navBarLinks = SELECTOR("nav.navbar  a.nav-link");
  const navBarTogglerBtn = SELECTOR("button.navbar-toggler");
  navBarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const isNavBarItemsVisible = navBarItems.classList.contains("show");
      if (isNavBarItemsVisible) {
        navBarTogglerBtn.click();
      }
    });
  });
};

const showFormError = () => {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
};
