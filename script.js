function show(img){
    let newImg = document.getElementById("newImg");
    newImg.src=img.src;
    document.querySelector(".cart").style.display = "flex"

}
function addCart(){
    alert("Added to cart");
    location.reload()
}
function Goback(){
    window.history.back()
}