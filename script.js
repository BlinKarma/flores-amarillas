const button = document.getElementById("openSurprise");
const music = document.getElementById("backgroundMusic");

const modal = document.getElementById("memoryModal");
const closeModal = document.getElementById("closeModal");

const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

const carouselImage = document.getElementById("carouselImage");
const carouselMessage = document.getElementById("carouselMessage");
const carouselCounter = document.getElementById("carouselCounter");


// =========================
// DIAPOSITIVAS
// =========================

const slides = [

    {
        image: "assets/margeyhomero.jpg",

        text: `
            Flor, desde la primera vez que te vi
            <br>
            ya no quise estar con nadie más
            <br>
            no tengo mucho que ofrecerte,
            solo todo mi amor ❤️
        `
    },

    {
        image: "assets/homerogirasoles.jpg",

        text: `
            Se que regalarte girasoles
            <br>
            va a alimentar mas tu ansiedad...
            <br>
            no quiero eso, quiero que estes feliz
            <br>
            por eso decidí encontrar un homero con un montón de girasoles para vos ❤️
        `
    },

    {
        image: "assets/tatuaje.jpg",

        text: `
            Recuerda que te tengo conmigo en mi corazon
            <br>
            te quiero un monton hermosa ❤️
            <br>
            de verdad me tenes loquito, muchisimo
            <br>
            a pesar de la distancia
        `
    }

];


// =========================
// SLIDE ACTUAL
// =========================

let currentSlide = 0;


// =========================
// MÚSICA
// =========================

music.volume = 0.05;


// =========================
// MOSTRAR SLIDE
// =========================

function showSlide(index) {

    const slide = slides[index];

    if (!slide) {
        return;
    }

    // Animación de salida
    carouselImage.classList.add("slide-changing");
    carouselMessage.classList.add("slide-changing");

    setTimeout(() => {

        carouselImage.src = slide.image;

        carouselMessage.innerHTML = slide.text;

        carouselCounter.textContent =
            `${index + 1} / ${slides.length}`;

        // Animación de entrada
        carouselImage.classList.remove("slide-changing");
        carouselMessage.classList.remove("slide-changing");

    }, 150);
}


// =========================
// SIGUIENTE SLIDE
// =========================

nextSlide.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});


// =========================
// SLIDE ANTERIOR
// =========================

prevSlide.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});


// =========================
// ABRIR SORPRESA
// =========================

button.addEventListener("click", () => {

    // Iniciar música
    music.play()
        .then(() => {

            console.log("🎵 Música iniciada al 50%");

        })
        .catch(error => {

            console.error(
                "❌ No se pudo reproducir la música:",
                error
            );

        });


    // Empezar siempre desde el primer slide
    currentSlide = 0;

    showSlide(currentSlide);


    // Abrir modal
    modal.classList.add("active");

});


// =========================
// CERRAR MODAL CON X
// =========================

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


// =========================
// CERRAR HACIENDO CLICK AFUERA
// =========================

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});