const btns = document.querySelectorAll(".toggle-btn");
const highlightContainer = document.querySelector(".blue-highlight");
const leftContent = document.querySelector(".left-content");
const rightContent = document.querySelector(".right-content");
const forms = document.querySelectorAll("form");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    highlightContainer.classList.toggle("active");

    forms.forEach((form) => {
      form.classList.toggle("d-none");
    });
    leftContent.classList.toggle("d-none");
    rightContent.classList.toggle("d-none");
    setTimeout(() => {
      leftContent.classList.toggle("active");
      rightContent.classList.toggle("active");
    }, 500);
  });
});
