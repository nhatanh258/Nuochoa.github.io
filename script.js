var navbar_toggle = document.getElementById("navbar-toggle");
var navhien = document.querySelector(".nahien");
var xepkhoi = document.getElementById("wrapper");
navbar_toggle.addEventListener("click", function () {
  navbar_toggle.classList.toggle("open");
  navhien.classList.toggle("nahienra");
});
let logic = document.querySelectorAll(".logic");
//
for (let i = 0; i < logic.length; i++) {
  logic[i].addEventListener("click", function () {
    logic.forEach((li) => {
      li.addEventListener("click", function () {
        logic.forEach((li) => li.classList.remove("logic1"));
        logic[i].classList.add("logic1");
      });
    });
  });
}
//
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
//
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

let buttons = document.querySelectorAll(".kich");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let kich1s = document.querySelectorAll(".kich1");
    kich1s.forEach((kich1) => {
      kich1.classList.add("an");
    });
    buttons.forEach((button) => {
      button.classList.remove("colordam");
    });

    let parent = button.closest(".box");
    let thongtin = parent.querySelector(".kich1");
    thongtin.classList.remove("an");
    button.classList.add("colordam");
  });
});
document.addEventListener("click", function (e) {
  let boxs = document.querySelector(".bocall");
  if (!boxs.contains(e.target)) {
    let kich1s = document.querySelectorAll(".kich1");
    kich1s.forEach((kich1) => {
      kich1.classList.add("an");
    });
    buttons.forEach((kich) => {
      kich.classList.remove("colordam");
    });
  }
});
//
let mau = document.querySelectorAll(".thaxuong");

let dropbtns = document.querySelectorAll(".dropbtn");
let dropcontens = document.querySelectorAll(".dropdown-content");
for (let h = 0; h < dropbtns.length; h++) {
  dropbtns[h].addEventListener("click", function () {
    dropcontens[h].classList.toggle("conten2");
    mau[h].classList.toggle("thungan");
  });
}
let nuthien4 = document.querySelector(".anall2");
let anut = document.querySelector(".anall0");
anut.addEventListener("click", function () {
  nuthien4.classList.toggle("anall2");
});
