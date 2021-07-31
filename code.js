// Get All vars 
var orginalImage=document.querySelector('img'),
    modal=document.querySelector(".modal"),
    btoClose=document.querySelector(".close"),
    textDesc=document.querySelector(".desc");
// When click on original image popUp show Image and add description      
orginalImage.onclick=function () {
    modal.style.display = "block";
    showImage.src=this.src;
    textDesc.innerHTML=this.alt;
}
// btn close show image and hide overlay
btoClose.addEventListener("click",function () {
    modal.style.display = "none";
})
//enter btn ESC close image popup
document.onkeydown=(e)=>{
    if (e.keyCode =="27") {
        modal.style.display = "none"; 
    }
}
