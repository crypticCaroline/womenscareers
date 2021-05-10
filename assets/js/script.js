// HEADLINE ANIMATION
var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity = "1";
wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for (var i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = i * 80 + "ms";
}

// QUESTION DISPLAY MODAL
// CONSTANT
const modal = document.getElementById("results-modal");
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
closeModal.addEventListener("click", close);
window.addEventListener("click", anyWhereClose);