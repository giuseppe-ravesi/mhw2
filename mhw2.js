let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000);
}

/*Menu a comparsa */
const hamMenu = document.querySelector(".hamburger-icon");
const menuHidden= document.querySelector(".menu-comparsa");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    menuHidden.classList.toggle("active");
}
)