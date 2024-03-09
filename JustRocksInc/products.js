let slider_img = document.querySelector('.slider-img ');
let bilder = ['Rock.png','Rock copy3.png','Rock copy4.png','Rock copy5.png',];
let i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--; 
    return setImg();

}
function next(){
    
}

function setImg(){
    return slider_img.setAttribute('src', 'images/'+'images'[i])
}
