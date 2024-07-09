/**
 * Highlights a competency on the cube.
 */
const selectCompetency = (event) => {
  const { face } = event.target.dataset;

  const cube = document.querySelector("#cube");

  cube.classList = `highlight-${face}`;
};

/**
 * Removes highlighting from the cube.
 */
const deselectCompetencies = () => {
  const cube = document.querySelector("#cube");

  cube.classList = "";
};

/**
 * Gets the cube ready for interactivity.
 */
const initCube = () => {
  const competencies = document.querySelectorAll(".competency");

  Array.from(competencies).forEach((competency) => {
    competency.addEventListener("mouseover", selectCompetency);
    competency.addEventListener("mouseout", deselectCompetencies);
  });
};

document.addEventListener("DOMContentLoaded", initCube);
