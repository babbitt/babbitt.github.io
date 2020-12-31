const nav = document.querySelector("#stickyNav");
const logo = document.querySelector("#logo")
const photoMe = document.querySelector("#me-photo")
const sectionName = document.querySelector("#section-name")
const APersonT = document.querySelector("#APerson");
const AProgrammerT = document.querySelector("#AProgrammer")
const AStudentT = document.querySelector("#AStudent");

const heroOffset = nav.offsetTop;
const APersonOffsetTop = APersonT.offsetTop;
const AProgrammerOffsetTop = AProgrammerT.offsetTop;
const AStudentOffsetTop = AStudentT.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= 200) logo.classList.add("small");
    else logo.classList.remove("small"); 

    if (window.pageYOffset >= heroOffset) nav.classList.add("sticky");
    else nav.classList.remove("sticky");

    if (window.pageYOffset >= APersonOffsetTop && window.pageYOffset <= AProgrammerOffsetTop - 250) sectionName.textContent = "A Person";
    else if (window.pageYOffset >= AProgrammerOffsetTop && window.pageYOffset <= AStudentOffsetTop - 250) sectionName.textContent = "A Programmer";
    else if (window.pageYOffset >= AStudentOffsetTop - 100) sectionName.textContent = "A Student";
    else sectionName.textContent = "";

    if (window.pageYOffset >= APersonOffsetTop - 325 && window.pageYOffset <= AProgrammerOffsetTop + 1000) photoMe.classList.add("removed");
    else photoMe.classList.remove("removed");

}

const showBB = () => {
    document.querySelector("#rp-fairly").classList.add("rp-hide");
    document.querySelector("#rp-binghamton").classList.add("rp-hide");
    document.querySelector("#rp-bssl").classList.add("rp-hide");
}
const hideBB = () => {
    document.querySelector("#rp-fairly").classList.remove("rp-hide");
    document.querySelector("#rp-binghamton").classList.remove("rp-hide");
    document.querySelector("#rp-bssl").classList.remove("rp-hide");
}

const showFairly = () => {
    document.querySelector("#rp-bloomberg").classList.add("rp-hide");
    document.querySelector("#rp-binghamton").classList.add("rp-hide");
    document.querySelector("#rp-bssl").classList.add("rp-hide");
}
const hideFairly = () => {
    document.querySelector("#rp-bloomberg").classList.remove("rp-hide");
    document.querySelector("#rp-binghamton").classList.remove("rp-hide");
    document.querySelector("#rp-bssl").classList.remove("rp-hide");
}

const showBing = () => {
    document.querySelector("#rp-fairly").classList.add("rp-hide");
    document.querySelector("#rp-bloomberg").classList.add("rp-hide");
    document.querySelector("#rp-bssl").classList.add("rp-hide");
}
const hideBing = () => {
    document.querySelector("#rp-fairly").classList.remove("rp-hide");
    document.querySelector("#rp-bloomberg").classList.remove("rp-hide");
    document.querySelector("#rp-bssl").classList.remove("rp-hide");
}

const showBSSL = () => {
    document.querySelector("#rp-fairly").classList.add("rp-hide");
    document.querySelector("#rp-binghamton").classList.add("rp-hide");
    document.querySelector("#rp-bloomberg").classList.add("rp-hide");
}
const hideBSSL = () => {
    document.querySelector("#rp-fairly").classList.remove("rp-hide");
    document.querySelector("#rp-binghamton").classList.remove("rp-hide");
    document.querySelector("#rp-bloomberg").classList.remove("rp-hide");
}

setTimeout(function () {
    TweenMax.to(".BingMinutes", 10, {
        rotation: 360,
        transformOrigin: "bottom",
        repeat: -1,
        ease: "linear"
    });
    TweenMax.to(".BingHours", 120, {
        rotation: 360,
        transformOrigin: "bottom",
        repeat: -1,
        ease: "linear"
    });
}, 1500);