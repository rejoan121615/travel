"use strict";

const GactiveRemover = (list) => {
    list.forEach((item, index) => {
        item.classList.remove("active");
    });
};

const GactiveAdd = (item) => {
    item.classList.add("active");
};

const GimgHandler = (list, item, index) => {
    item.src = list[index];
};

// just take a look imgage controller
const getBtn = document.querySelectorAll(
    "#takeYourJourney .button_wrapper button"
);
const imgStorage = [
    "./img/takeYourJourney/beach.jpg",
    "./img/takeYourJourney/hotel.jpg",
    "./img/takeYourJourney/jungle.jpg",
];
const imgContainer = document.querySelector(
    "#takeYourJourney .figure .figure-img"
);

console.log(imgContainer);

getBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        GactiveRemover(getBtn);
        GactiveAdd(item);
        GimgHandler(imgStorage, imgContainer, index);
    });
});

// pack and go section

const packOption = document.querySelectorAll("#packAndGo .pack_wrapper .card");

packOption.forEach((item, index) => {
    item.addEventListener("click", () => {
        GactiveRemover(packOption);
        GactiveAdd(item);
    });
});
