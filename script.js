// const apiKey = 'vL6U1HWoZmZcIF0ETK84r2Lny3ObVHhtuGUpMN_7YgI'
const url = 'https://dog.ceo/api/breed/chow/images'

fetch(url)
    .then(res => res.json())
    .then(convertedResponse => {
        console.log(convertedResponse)
    })
    .catch(err => {
        console.log("Something went wrong", err)
    })

let i;

let slides = document.querySelector("chow-image");

let dots = document.querySelector("dot");

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slideIndex++;

if (slideIndex > slides.length) {
    slideIndex = 1;
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.
    replace(" active", "");
}

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";

// // Change image every 2 seconds 
// setTimeout(showSlides, 2000);  