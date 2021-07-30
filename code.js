// Create arary image and put in var 
var images=['img1.jpg','img2.png','img3.jpg','img4.png'];
// var start zero because arary start from 0  
var i=0;

function imageRandom() {
    // get image and put picture in src 
    document.imgHome.src=images[i];
    // condition for imges and repeat when var arrive length -1 
    if (i < images.length -1 ) {
        i++;
    } else {
        i=0;
    }
    setTimeout("imageRandom()",2000)
}
//Trigger function
imageRandom();



