//jshint esversion:6

const body = document.querySelector("body");
function createSticky() {
  const writingPad = createBox();
  const textarea = document.createElement("textarea");
  writingPad.appendChild(textarea);
}
