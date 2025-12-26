const sectionButtons = document.querySelectorAll('.section-button');
const sections = document.querySelectorAll('.section-content');

const toggleSection = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  const targetButton = document.querySelector(`[data-section="${sectionId}"]`);

  if (!targetSection || !targetButton) return;
  const isClosed = targetSection.classList.contains('section-closed');

  if (isClosed) {
    targetSection.classList.remove('section-closed');
    targetSection.classList.add('section-opened');
    targetButton.classList.add('section-button--active');
  } else {
    targetSection.classList.remove('section-opened');
    targetSection.classList.add('section-closed');
    targetButton.classList.remove('section-button--active');
  }
};

const initSections = () => {
  sectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const sectionId = button.dataset.section;
      toggleSection(sectionId);
    });
  });
};

export { initSections };
