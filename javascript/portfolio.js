// Opens and closes the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// Changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This stores all slides with the class name "mySlides" in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This stores all elements name "dot" in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) { // Loop takes items in array "slides" and sets the display to none
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Loop loop takes each item in the array "dots" and removes "active" (active styling)
    }
    slides[slideIndex - 1].style.display = "block"; // Displays image in the slideshow
    dots[slideIndex - 1].className += " active"; // Adds active styling to the dot for each image
}