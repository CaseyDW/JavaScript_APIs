"use strict";

// Exercise 1 Section
console.log("Hello Fetch API!");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "ngEPZoCrTOimodtkUa2eVxJhBs6mcDJ9";

let savedGifs = [];

let feedBackEle = document.querySelector("#feedBack");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");
let imageContainer = document.querySelector("#imageContainer");
let savedBtn = document.querySelector("#SavedBtn");
let savedGifsContainer = document.querySelector("#savedGifs");

searchBtn.addEventListener("click", (event) => {
   getGif(searchInput.value);
});

saveBtn.addEventListener("click", (event) => {
savedGifs.push({ 
    src: gifEle.src, 
    alt: gifEle.alt, 
    id: gifEle.getAttribute("data-id")
});

let newGif = document.createElement("img");
newGif.src = gifEle.src;
newGif.alt = gifEle.alt;
newGif.id = gifEle.getAttribute("data-id");
savedGifsContainer.prepend(newGif);
});

//function getGif(searchTerm) {
//fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
//.then((res) => res.json())
//.then((body) => {
//    gifEle.src = body.data.images.original.url;
//})
//.catch((err) => {
//console.error(err);
//feedBackEle.textContent = err.message;
//});
//}

async function getGif(searchTerm) {
    try {
        let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
        let body = await res.json();
        gifEle.src = body.data.images.original.url;
        gifEle.alt = body.data.title;
        gifEle.setAttribute("data-id", body.data.id);
        imageContainer.classList.remove("hidden");
    } catch (err) {
        console.error(err);
        feedBackEle.textContent = err.message;
        imageContainer.classList.add("hidden");
    }
}