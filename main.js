var sliderImg = Array.from(document.querySelectorAll('.slider_container img'));
var slidesCount = sliderImg.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById("slide_number");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var paginationElement = document.createElement("ul");


paginationElement.setAttribute("id" , "indicators-ul");
next.onclick = nextSlide;
prev.onclick = prevSlide;

for (var i = 1; i <= slidesCount; i++) {
    var paginationItems = document.createElement("li");
    paginationItems.setAttribute("data-index", i);
    paginationItems.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItems);
}
document.getElementById("indicators").appendChild(paginationElement);

var NewPaginationUL = document.getElementById("indicators-ul");
var paginationBullets = Array.from(document.querySelectorAll('#indicators-ul li'));

theChecker();

for (var j = 0; j <= slidesCount; j++) {
    paginationBullets[j].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}


function nextSlide() {
    if (next.classList.contains("disabled")) {
        return false;
    }
    currentSlide++;
    theChecker();
}
function prevSlide() {
    if (prev.classList.contains("disabled")) {
        return false;
    }
    currentSlide--;
    theChecker();
}

function theChecker() {
    slideNumberElement.textContent = "slide #" + (currentSlide) + " of " + (slidesCount);
    removeAllActives();
    sliderImg[currentSlide - 1].classList.add("active");
    NewPaginationUL.children[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prev.classList.add("disabled");
    } else if (currentSlide == slidesCount) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
        prev.classList.remove("disabled");
    }
}

function removeAllActives () {
    sliderImg.forEach (function (img) {
        img.classList.remove("active");
    });
    paginationBullets.forEach (function (li) {
        li.classList.remove("active");
    });
}

