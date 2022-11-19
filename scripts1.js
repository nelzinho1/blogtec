/*Zoom imagens  */
const box = document.getElementById("box");
const img = document.querySelector("img");

box.addEventListener("mousemove", (e) =>{
    const x = e.pageX - e.currentTarget.offsetLeft
    const y = e.pageY - e.currentTarget.offsetTop
    console.log(x, y)
    img.style.transformOrigin = `${x}px ${y}px`  
    img.style.transform =`scale(2)`
});

box.addEventListener("mouseleave", () => {

    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";

});




