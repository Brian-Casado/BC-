// Función para abrir el popup
function openPopup() {
    var blur = document.getElementById('blur');
    if (blur) {
        blur.classList.add('active');
    }

    var popup = document.querySelector('.container22');
    if (popup) {
        popup.classList.add('active');
    }

    // Agregamos un evento para cerrar el popup si se hace clic fuera de él
    window.addEventListener("click", closePopupOutside);
}

// Función para cerrar el popup
function closePopup() {
    var blur = document.getElementById('blur');
    if (blur) {
        blur.classList.remove('active');
    }

    var popup = document.querySelector('.container22');
    if (popup) {
        popup.classList.remove('active');
    }

    // Removemos el evento de cerrar el popup al hacer clic fuera
    window.removeEventListener("click", closePopupOutside);
}

// Función para cerrar el popup al hacer clic fuera de él
function closePopupOutside(event) {
    var popup = document.querySelector('.container22');
    var btn = document.getElementById("myBtn");
    if (!popup.contains(event.target) && event.target !== btn) {
        closePopup();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    animateOnScroll();
    window.addEventListener("scroll", function () {
        animateOnScroll();
    });
});

function animateOnScroll() {
    var elements = document.querySelectorAll(".animate-scroll");
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("active");
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function () {
    // Configura la animación con anime.js
    const animatedElements = document.querySelectorAll('.animate-scroll');

    anime.timeline({
        targets: animatedElements,
        opacity: [0, 1],
        translateY: [-30, 0],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: anime.stagger(100),
    });

    let lastScrollPosition = window.scrollY;

    function revealOnScroll() {
        const scrollPosition = window.scrollY;
        
        // Compara la posición actual con la posición anterior
        if (scrollPosition > lastScrollPosition) {
            // Hacia abajo: inicia la animación
            animatedElements.forEach((element) => {
                if (scrollPosition + window.innerHeight - 0 > element.offsetTop) {
                    element.classList.add('active');
                }
            });
        } else {
            // Hacia arriba: elimina la clase 'active' para revertir la animación
            animatedElements.forEach((element) => {
                if (scrollPosition + window.innerHeight > element.offsetTop) {
                    element.classList.remove('active');
                }
            });
        }
    
        lastScrollPosition = scrollPosition;
    }
    // Agrega el evento de scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // También podrías activar las animaciones cuando la página se carga inicialmente
    revealOnScroll();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// ++++++++++++++++++++++++++++++++++++++++++++

// DropDownMenu

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PhoneScripts

document.getElementById('phone-link1').addEventListener('click', function () {
    var phoneNumber = '8504958272';
    window.location.href = 'tel:' + phoneNumber;
});


// EmailScripts

function sendEmail(destination) {
    // Abre el cliente de correo predeterminado con destinatario, asunto y cuerpo predefinidos
    window.location.href = `mailto:${destination}?subject=Inquiry&body=I'm interested in your services.`;
}

// Función para abrir el popup al hacer clic en el botón
var btn = document.getElementById("myBtn");
btn.addEventListener("click", openPopup);

