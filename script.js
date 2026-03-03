// ===== CARRUSEL PROFESIONAL FUNCIONAL =====

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

// ===== HAMBURGUESA MEJORADA =====

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

if (hamburger && dropdown) {

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que se cierre al abrir
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
  });

  // Evitar que se cierre si haces click dentro del menú
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Cerrar si haces click fuera
  document.addEventListener("click", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });

  // Cerrar si haces scroll
  window.addEventListener("scroll", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });

  // Cerrar si redimensionas pantalla
  window.addEventListener("resize", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
  });
}

  // FORM
  const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const btn = form.querySelector('button');
    btn.innerHTML = "Enviando...";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            if (response.status == 200) {
                btn.innerHTML = "¡Mensaje Enviado!";
                form.reset(); // Limpia el formulario
            } else {
                btn.innerHTML = "Error al enviar";
            }
        })
        .catch(error => {
            console.log(error);
            btn.innerHTML = "Algo salió mal";
        });
});