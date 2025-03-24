const pro = document.getElementById('button');
const pro1 = document.getElementById('text');
const pro2 = document.getElementById('text2');
const pro3 = document.getElementById('text3');
const pro4 = document.getElementById('text4');
const pic = document.getElementById("pic");
const pic2 = document.getElementById("pic2");
const web = document.getElementById('web');
const make = document.getElementById("make");

window.addEventListener("scroll",function(){
let value = window.scrollY;
// pro.style.marginTop = value * 2.2 + "px";
pro.style.marginLeft = value * -1.1 + "px";
pro1.style.marginLeft = value * -1.1 + "px";
pro2.style.marginLeft = value * -1.1 + "px";
pro3.style.marginLeft = value * -1.1 + "px";
pro4.style.marginLeft = value * -1.1 + "px";
pic.style.marginLeft = value * -1.1 + "px";
pic2.style.marginLeft = value * 2.1 + "px";

make.style.opacity = '1';




})










