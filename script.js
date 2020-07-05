// const apiKey = 'vL6U1HWoZmZcIF0ETK84r2Lny3ObVHhtuGUpMN_7YgI'
const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

fetch(url)
    .then(res => res.json())
    .then(convertedResponse => {
        console.log(convertedResponse)
        console.log(convertedResponse.name)
        let results = convertedResponse;
        for (i = 0; i < convertedResponse.length; i++) {
            let p = document.querySelector("p");
            p.innerHTML = convertedResponse[i].name
            document.querySelector('#makeup').appendChild(p)

            let image_link = (convertedResponse[i].image_link)
            let image = document.querySelector(".maybelline").src = image_link
            // document.querySelector('#makeup').appendChild(image).src

        }


    })
    .catch(err => {
        console.log("Something went wrong", err)
    })


let slideIndex = 1;
showImgs(slideIndex);

function plusDivs(n) {
    showImgs(slideIndex += n);
}

function showImgs(n) {
    let i;
    let x = document.getElementsByClassName("maybelline");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}