import { initScrollAnimationListener } from "./modules/smooth-scroll";
import { initSections } from "./modules/open-sections";

window.addEventListener('DOMContentLoaded', () => {
  initScrollAnimationListener();
  initSections();
});
