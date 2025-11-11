const text = "Building the Future, Restoring the Past.";
let index = 0;

function typeEffect() {
  const el = document.getElementById("typewriter");
  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
