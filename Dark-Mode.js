const bdy=document.getElementById("bdy");
const mycb=document.getElementById("mycb");

 mycb.addEventListener("change",function(){
    if (mycb.checked)
    {
        bdy.style.backgroundColor="black";
    }
    else
    {
        bdy.style.backgroundColor="white";
    }
 });