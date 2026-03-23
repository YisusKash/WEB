function initCarousel(trackId) {
  const track = document.getElementById(trackId);
  const carousel = track.parentElement;

  let scrollSpeed = 0.5;
  let scrollPosition = 0;

  // Duplicar contenido UNA sola vez
  track.innerHTML += track.innerHTML;

  function autoScroll() {
    scrollPosition += scrollSpeed;

    if (scrollPosition >= track.scrollWidth / 2) {
      scrollPosition = 0;
    }

    track.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // Botones
  const leftBtn = carousel.querySelector(".left");
  const rightBtn = carousel.querySelector(".right");

  rightBtn.addEventListener("click", () => {
    scrollPosition += 300;
  });

  leftBtn.addEventListener("click", () => {
    scrollPosition -= 300;
    if (scrollPosition < 0) scrollPosition = 0;
  });
}

initCarousel("cat-track");
initCarousel("top-track");

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

if (hamburger && dropdown) {

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
  });


  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });


  document.addEventListener("click", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });


  window.addEventListener("scroll", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });


  window.addEventListener("resize", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });
}


document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;


    document.querySelectorAll('.faq-item').forEach(child => {
      if (child !== parent) child.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});
