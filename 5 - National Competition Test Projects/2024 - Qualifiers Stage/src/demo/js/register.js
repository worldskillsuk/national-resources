/**
 * Selects the modal.
 */
const getModal = () => {
  return document.querySelector("#register-modal");
};

/**
 * Stops the register form from submitting.
 */
const stopFormSubmission = (event) => {
  event.preventDefault();

  const modal = getModal();
  modal.close();
};

/**
 * Sets up the modal and its related elements.
 */
const setUpModal = () => {
  const modal = getModal();
  const modalCloseButtons = document.querySelectorAll(".register-modal-close");

  const registerButtons = document.querySelectorAll(".register-button");

  const form = document.querySelector("#register-form");

  // Open the modal when a register button is clicked
  Array.from(registerButtons).forEach((button) => {
    button.addEventListener("click", () => {
      modal.showModal();
    });
  });

  // Close the modal when the close button is clicked
  Array.from(modalCloseButtons).forEach((button) => {
    button.addEventListener("click", () => {
      modal.close();
    });
  });

  form.addEventListener("submit", stopFormSubmission);
};

document.addEventListener("DOMContentLoaded", setUpModal);
