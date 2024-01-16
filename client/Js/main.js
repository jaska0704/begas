let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");

btn1.addEventListener("click", (e) => {
  menu1.classList.toggle("dis_none");
});
btn2.addEventListener("click", (e) => {
  menu2.classList.toggle("dis_none");
});


