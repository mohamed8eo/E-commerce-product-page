// Cart functionality
const cart_icon = document.querySelector(".card-icon");
const cart_container = document.querySelector(".Cart-container");
let close_counter = 0;

cart_icon.addEventListener("click", () => {
    cart_container.style.display = close_counter === 0 ? "block" : "none";
    close_counter = close_counter === 0 ? 1 : 0;
});

// Counter functionality
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const spanCount = document.querySelector(".counter");
let startCounter = 1;

plus.addEventListener("click", () => {
    startCounter++;
    updateCounter();
});

minus.addEventListener("click", () => {
    startCounter--;
    updateCounter();
});

function updateCounter() {
    if (startCounter > 0) {
        spanCount.textContent = startCounter;
        plus.classList.remove("disabled");
        minus.classList.remove("disabled");
    } else {
        minus.classList.add("disabled");
    }
}

// Cart item management
const AddtoCart = document.querySelector(".add");
const Cartitem = document.querySelector(".shop");
const card_info = document.querySelector(".card-info");
const amoutofitme = document.querySelector(".amoutofitme");
const Total_price = document.querySelector(".Total-price");
const h2Empty = document.createElement("h2");

AddtoCart.addEventListener("click", () => {
    document.querySelector(".Cart-item").textContent = startCounter;
    Cartitem.appendChild(card_info);
    card_info.style.display = "block";
    amoutofitme.textContent = startCounter;
    Total_price.textContent = `$${startCounter * 125}.00`;
    h2Empty.textContent = "";
    h2Empty.classList.remove("Empty");
});

document.querySelector(".Delete").addEventListener("click", () => {
    card_info.style.display = "none";
    h2Empty.textContent = "Cart is Empty";
    h2Empty.classList.add("Empty");
    Cartitem.appendChild(h2Empty);
});

document.querySelector(".check").addEventListener("click", () => {
    card_info.style.display = "none";
    h2Empty.textContent = "Order Checking";
    h2Empty.classList.add("Empty");
    Cartitem.appendChild(h2Empty);
    setTimeout(() => {
        h2Empty.textContent = "";
        h2Empty.classList.remove("Empty");
    }, 1000);
});

// Image gallery functionality
const product_Photos = Array.from(document.querySelectorAll(".product-photos img"));
const product_Photos_second = Array.from(document.querySelectorAll(".product-photos-second img"));
const product_thumbnail = Array.from(document.querySelectorAll(".product-thumbnail img"));
const product_span = Array.from(document.querySelectorAll(".product-thumbnail span"));
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentindex = 1;

product_Photos.forEach(photo => {
    photo.addEventListener("click", () => {
        document.querySelector(".product-container-second").style.display = "block";
        product_Photos_second[currentindex - 1].classList.add("active");
        if (window.matchMedia("(min-width: 768px)").matches) {
            document.querySelector(".Main-content").style.filter = "blur(4px)";
        } else {
            document.querySelector(".Main-content").style.filter = "none";
        }
    });
});

product_thumbnail.forEach(thumb => {
    thumb.addEventListener("click", () => {
        currentindex = parseInt(thumb.getAttribute("data-number"));
        theGeneraion();
    });
});

function theGeneraion() {
    RemoveAll();
    product_Photos[currentindex - 1].classList.add("active");
    product_thumbnail[currentindex - 1].classList.add("active-thu");
    product_span[currentindex - 1].classList.add("active-span");
}

function RemoveAll() {
    product_Photos.forEach(image => image.classList.remove("active"));
    product_thumbnail.forEach(image => image.classList.remove("active-thu"));
    product_span.forEach(span => span.classList.remove("active-span"));
}

nextButton.addEventListener("click", nextElement);
prevButton.addEventListener("click", prevElement);

function nextElement() {
    if (!nextButton.classList.contains("disabled")) {
        currentindex++;
        theGeneraionsecond();
    }
}

function prevElement() {
    if (!prevButton.classList.contains("disabled")) {
        currentindex--;
        theGeneraionsecond();
    }
}

function theGeneraionsecond() {
    RemoveAllsecond();
    product_Photos_second[currentindex - 1].classList.add("active");
    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevButton.classList.toggle("disabled", currentindex === 1);
    nextButton.classList.toggle("disabled", currentindex === product_Photos.length);
}

function RemoveAllsecond() {
    product_Photos_second.forEach(photo => photo.classList.remove("active"));
}

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".product-container-second").style.display = "none";
    document.querySelector(".Main-content").style.filter = "none";
    RemoveAllsecond();
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    if (document.querySelector(".product-container-second").style.display === "block") {
        if (event.key === "ArrowRight") nextElement();
        if (event.key === "ArrowLeft") prevElement();
    }
});


// nefgation menu 
document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".mob-close").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".left-Seaction .ul-seaction").style.display = "flex";
})
document.querySelector(".mob-close").addEventListener("click", function () {
    document.querySelector(".mob-close").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".left-Seaction .ul-seaction").style.display = "none";
})