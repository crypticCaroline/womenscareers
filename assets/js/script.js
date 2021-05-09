// HEADLINE ANIMATION
document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = [
    "Tech Needs You!",
    "Find Out Which Is The Perfect Role For You!",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 400);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// QUESTION DISPLAY MODAL
// CONSTANT
const modal = document.getElementById("question-modal");
const btn = document.getElementById("quiz-btn");
const closeModal = document.getElementById("close-modal"); // FUNCTIONS

// FUNCTIONS
// open the modal when the user clicks on the button
openModal = () => {
  modal.style.display = "block";
};
// close the modal when the user clicks on the <span> (X)
close = () => {
  modal.style.display = "none";
};
// close the modal when the user clicks anywhere outside of the modal
anyWhereClose = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// EVENTS
btn.addEventListener("click", openModal);
closeModal.addEventListener("click", close);
window.addEventListener("click", anyWhereClose);

