window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  var header = document.querySelector("header");
  var headerHeight = header.clientHeight;

  if (window.pageYOffset > headerHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
const leftHalf = document.getElementById("leftHalf");
const rightHalf = document.getElementById("rightHalf");
const leftHalfLatte = document.getElementById("leftHalfLatte");
const rightHalfLatte = document.getElementById("rightHalfLatte");
const leftHalfcappuccino = document.getElementById("leftHalfcappuccino");
const rightHalfcappuccino = document.getElementById("rightHalfcappuccino");
const leftHalfcafemoca = document.getElementById("leftHalfcafemoca");
const rightHalfcafemoca = document.getElementById("rightHalfcafemoca");
const leftHalfcaramelmacchiato = document.getElementById(
  "leftHalfcaramelmacchiato"
);
const rightHalfcaramelmacchiato = document.getElementById(
  "rightHalfcaramelmacchiato"
);
const leftHalfdolcelatte = document.getElementById("leftHalfdolcelatte");
const rightHalfdolcelatte = document.getElementById("rightHalfdolcelatte");

const leftHalfGrapefruit = document.getElementById("leftHalfGrapefruit");
const rightHalfGrapefruit = document.getElementById("rightHalfGrapefruit");
const leftHalfHibiscus = document.getElementById("leftHalfHibiscus");
const rightHalfHibiscus = document.getElementById("rightHalfHibiscus");
const leftHalfGreentea = document.getElementById("leftHalfGreentea");
const rightHalfGreentea = document.getElementById("rightHalfGreentea");
const handleMouseOver = (expandElement, shrinkElement) => {
  expandElement.style.clipPath = "circle(100% at 50% 50%)";
  shrinkElement.style.clipPath = "circle(0% at 100% 50%)";
  expandElement.style.width = "100%";
  shrinkElement.style.width = "0%";
  expandElement.style.backgroundSize = "100% 100%";
  expandElement.style.backgroundPosition = "center";
};

const handleMouseLeave = (expandElement, shrinkElement) => {
  expandElement.style.clipPath = "circle(100% at 0% 50%)";
  shrinkElement.style.clipPath = "circle(100% at 100% 50%)";
  expandElement.style.width = "50%";
  shrinkElement.style.width = "50%";
  expandElement.style.backgroundSize = "200% 100%";
  shrinkElement.style.backgroundSize = "200% 100%";
  expandElement.style.backgroundPosition = "center";
  shrinkElement.style.backgroundPosition = "center";
};

leftHalf.addEventListener("mouseover", () =>
  handleMouseOver(leftHalf, rightHalf)
);
rightHalf.addEventListener("mouseover", () =>
  handleMouseOver(rightHalf, leftHalf)
);
leftHalf.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalf, rightHalf)
);
rightHalf.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalf, leftHalf)
);

leftHalfLatte.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfLatte, rightHalfLatte)
);
rightHalfLatte.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfLatte, leftHalfLatte)
);
leftHalfLatte.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfLatte, rightHalfLatte)
);
rightHalfLatte.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfLatte, leftHalfLatte)
);

leftHalfcappuccino.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfcappuccino, rightHalfcappuccino)
);
rightHalfcappuccino.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfcappuccino, leftHalfcappuccino)
);
leftHalfcappuccino.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfcappuccino, rightHalfcappuccino)
);
rightHalfcappuccino.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfcappuccino, leftHalfcappuccino)
);

leftHalfcafemoca.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfcafemoca, rightHalfcafemoca)
);
rightHalfcafemoca.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfcafemoca, leftHalfcafemoca)
);
leftHalfcafemoca.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfcafemoca, rightHalfcafemoca)
);
rightHalfcafemoca.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfcafemoca, leftHalfcafemoca)
);

leftHalfcaramelmacchiato.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfcaramelmacchiato, rightHalfcaramelmacchiato)
);
rightHalfcaramelmacchiato.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfcaramelmacchiato, leftHalfcaramelmacchiato)
);
leftHalfcaramelmacchiato.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfcaramelmacchiato, rightHalfcaramelmacchiato)
);
rightHalfcaramelmacchiato.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfcaramelmacchiato, leftHalfcaramelmacchiato)
);

leftHalfdolcelatte.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfdolcelatte, rightHalfdolcelatte)
);
rightHalfdolcelatte.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfdolcelatte, leftHalfdolcelatte)
);
leftHalfdolcelatte.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfdolcelatte, rightHalfdolcelatte)
);
rightHalfdolcelatte.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfdolcelatte, leftHalfdolcelatte)
);

leftHalfGrapefruit.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfGrapefruit, rightHalfGrapefruit)
);
rightHalfGrapefruit.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfGrapefruit, leftHalfGrapefruit)
);
leftHalfGrapefruit.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfGrapefruit, rightHalfGrapefruit)
);
rightHalfGrapefruit.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfGrapefruit, leftHalfGrapefruit)
);

leftHalfHibiscus.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfHibiscus, rightHalfHibiscus)
);
rightHalfHibiscus.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfHibiscus, leftHalfHibiscus)
);
leftHalfHibiscus.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfHibiscus, rightHalfHibiscus)
);
rightHalfHibiscus.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfHibiscus, leftHalfHibiscus)
);

leftHalfGreentea.addEventListener("mouseover", () =>
  handleMouseOver(leftHalfGreentea, rightHalfGreentea)
);
rightHalfGreentea.addEventListener("mouseover", () =>
  handleMouseOver(rightHalfGreentea, leftHalfGreentea)
);
leftHalfGreentea.addEventListener("mouseleave", () =>
  handleMouseLeave(leftHalfGreentea, rightHalfGreentea)
);
rightHalfGreentea.addEventListener("mouseleave", () =>
  handleMouseLeave(rightHalfGreentea, leftHalfGreentea)
);

var slideIndex = 0;
var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("slides");
var slideInterval;

function showSlides() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideInterval = setTimeout(showSlides, 2000); // setTimeout의 리턴 값을 slideInterval에 저장
}

showSlides();

function currentSlide(n) {
  clearTimeout(slideInterval); // setTimeout을 취소

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex = n;

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideInterval = setTimeout(showSlides, 2000); // 다시 setTimeout을 설정
}

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var dotIndex = Array.from(dots).indexOf(this) + 1;
    currentSlide(dotIndex);
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// 사용자가 버튼을 클릭하면 페이지 상단으로 이동
function topFunction() {
  document.body.scrollTop = 0; // Safari 브라우저를 위한 설정
  document.documentElement.scrollTop = 0; // 다른 브라우저를 위한 설정
}
