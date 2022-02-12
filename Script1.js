//Implementation of images' modal.
const setModal =  document.getElementById("modal");
const closeModal = document.getElementById("btnModal");
let modalImg =  document.getElementById("modal-img");
const imgsArray = document.getElementsByClassName("galleryMinorPictures");
let imgIndex = 0;

console.log(imgsArray.length);

const slideRight = function(){
    if(imgIndex < (imgsArray.length - 1) && imgIndex >= 0){
        imgIndex++;
    }
    else{
        imgIndex = 0;
    }
    imgToModal(imgIndex);
}

const slideLeft = function(){
    if(imgIndex > 0 && imgIndex < (imgsArray.length)){
        imgIndex--;
    }
    else{
        imgIndex = 0;
    }
    imgToModal(imgIndex);
}

document.getElementById("right-slider").onclick = function(){
    slideRight();
}

document.getElementById("left-slider").addEventListener("click", slideLeft);

const imgToModal = function(n){  
   modalImg.src = imgsArray[n].src;
    setModal.style.display = "block";
    imgIndex = n;
}

const windowClose = function(){
    setModal.style.display = "none";
}
