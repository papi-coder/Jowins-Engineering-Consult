const audio = new Audio("sounds/sparkle.mp3");
document.addEventListener("click", (e) => {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = `${e.clientX}px`;
  spark.style.top = `${e.clientY}px`;
  document.body.appendChild(spark);

  audio.currentTime = 0;
  audio.play().catch(() => {}); // prevent autoplay block

  setTimeout(() => spark.remove(), 600);
});
