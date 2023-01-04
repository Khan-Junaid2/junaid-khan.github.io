var tabLinks= document.getElementsByClassName('tab-links');
var tabContent= document.getElementsByClassName('tab-contents');



function openTab(tabName){
for(tablink of tabLinks){
    tablink.classList.remove('active-link');
    
}
for(tabcontent of tabContent){
    tabcontent.classList.remove('active-tab');
}
event.currentTarget.classList.add('active-link');
document.getElementById(tabName).classList.add('active-tab');
}
var sideMenuId;
document.addEventListener("DOMContentLoaded", function () {
   sideMenuId = document.getElementById("sidemenu");
  });
console.log(sideMenuId);
function openMenu(){
        sideMenuId.style.right= "0px";
       
}
   
function closeMenu(){
    sideMenuId.style.right= "-200px";
}



 
