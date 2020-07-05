// const apiKey = 'vL6U1HWoZmZcIF0ETK84r2Lny3ObVHhtuGUpMN_7YgI'
const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

fetch(url)
    .then(res => res.json())
    .then(convertedResponse => {
        console.log(convertedResponse)
        let results = convertedResponse;
        for (i = 0; i < results.length; i++) {
            let p = document.querySelector("p");
            p.innerHTML = results[i].name
            document.querySelector('.product-info').appendChild(p)
            let image_link = (results[i].image_link)
            let image = document.querySelector(".maybelline").src = image_link
        }
    })
    .catch(err => {
        console.log("Something went wrong", err)
    })


// let slideIndex = 1;
// showImgs(slideIndex);

// function plusDivs(n) {
//     showImgs(slideIndex += n);
// }

// function showImgs(n) {
//     let i;
//     let x = document.getElementsByClassName(".product-info");
//     if (n > x.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = x.length
//     };
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
// }