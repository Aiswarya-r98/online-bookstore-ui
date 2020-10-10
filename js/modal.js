window.onload = function(){
    document.querySelector(".modal-container-s").style.display = "none";
    
};

document.querySelector('.close').addEventListener('click',function(){

    document.querySelector('.modal-container-s').style.display = "none";
});

function showModal(){
    document.querySelector('.modal-container-s').style.display = "flex";
    document.querySelector(".modal-img-viewmore").style.display = "none";

}
function showModalCart(){
    document.querySelector('.modal-container-s').style.display = "flex";
    
}