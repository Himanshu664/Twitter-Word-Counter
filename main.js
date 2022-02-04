const inputtext = document.getElementById("inputta");
const maxlength = 280;
inputtext.onkeyup = () => {
  const counter = inputtext.value.length;
  const characterLeft = maxlength - counter;
  document.getElementById("characters").innerHTML = counter;
  if (characterLeft < 0) {
    inputtext.style.borderColor = "red";
    inputtext.style.outlineColor = "red";
  } else {
    inputtext.removeAttribute("");
  }
};
