let barContainer = document.querySelector(".barContainer");
let sidebar = document.querySelector(".links");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function resume(){
  window.open("https://drive.google.com/file/d/1t3ndZLbYMF3T5ssVM3vvcRZo7p7v3vmm/view?usp=drive_link");
}
function close(){
  barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
}