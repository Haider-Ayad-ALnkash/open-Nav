// Get All vars 
   var modal=document.querySelector(".modal"),
    open=document.querySelector(".open"),
       btoClose=document.querySelector(".close");
// When click on original image popUp show Image and add description      
function openDiv() {
    modal.style.transform="scale(1)";
    open.style.top="-44px"; 
}
function closeDiv() {
    modal.style.transform="scale(0)"; 
    open.style.top="0px"; 
}