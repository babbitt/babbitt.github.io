const nav = document.querySelector("#stickyNav");
const navTitle = document.querySelector('.nav-name');
const logoList = document.querySelectorAll(".logo")
const fullLogo = document.querySelector(".logo.full")
const photoMe = document.querySelector("#me-photo")
const sectionName = document.querySelector("#section-name")
const APersonT = document.querySelector("#APerson");
const AProgrammerT = document.querySelector("#AProgrammer")
const AStudentT = document.querySelector("#AStudent");

const heroOffset = nav.offsetTop;
const APersonOffsetTop = APersonT.offsetTop;
const AProgrammerOffsetTop = AProgrammerT.offsetTop;
const AStudentOffsetTop = AStudentT.offsetTop;

const born = new Date(972958260000);
const now = new Date();
document.querySelector('#yearsAlive').innerText = (new Date(now - born)).getUTCFullYear() - 1970

setTimeout(() => {
    textFit(document.querySelectorAll('#AStudent h3'), {multiLine: false})
}, 1);
window.onresize = () => {
    textFit(document.querySelectorAll('#AStudent h3'), {multiLine: false})
}

window.onscroll = () => {
    if (window.pageYOffset >= 200) {
        [...logoList].forEach((logo)=>logo.classList.add("small"));
        fullLogo.style.opacity = 0;
    }
    else {
        [...logoList].forEach((logo)=>logo.classList.remove("small")); 
        fullLogo.style.opacity = 1;
    }

    if (window.pageYOffset >= heroOffset) {
        nav.classList.add("sticky");
        navTitle.style.opacity = 1
    }
    else {
        nav.classList.remove("sticky");
        navTitle.style.opacity = 0;
    }

    if (window.pageYOffset >= APersonOffsetTop && window.pageYOffset <= AProgrammerOffsetTop - 100) sectionName.textContent = "A Person";
    else if (window.pageYOffset >= AProgrammerOffsetTop && window.pageYOffset <= AStudentOffsetTop - 100) sectionName.textContent = "A Programmer";
    else if (window.pageYOffset >= AStudentOffsetTop - 100) sectionName.textContent = "A Student";
    else sectionName.textContent = "";

    if (window.pageYOffset >= APersonOffsetTop - 150) photoMe.classList.add("removed");
    else photoMe.classList.remove("removed");

}

const goSmooth = (e) => {
    e.preventDefault();
    console.log(e)
    history.pushState({}, document.title, e.target.hash)
    document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' });
}

const showSelection = (e) => {
    const empId = e.target.attributes.empId.value
    const images = document.querySelector('#reading-pane').children
    Array.from(images).forEach((value,i)=>{
        if (value.getAttribute('empId') != empId) value.classList.add('rp-hide')
    })
}

const hideSelection = (e) => {
    const images = document.querySelector('#reading-pane').children
    Array.from(images).forEach((value,i)=>{
        value.classList.remove('rp-hide')
    })
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