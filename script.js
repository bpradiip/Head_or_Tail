const coin=document.querySelector(".coin")
const roll_button=document.querySelector("button")
const title=document.querySelector("h1")

roll_button.addEventListener("click",toss)
setTimeout(toss,500)

function toss()
{
    roll_button.disabled=true
    title.innerText="Tossing"
    rand=Math.floor(Math.random()*2+1)
    coin.classList.add("animate")
    setTimeout(function(){
        if(rand%2==0)
    {
        title.innerText="HEAD"
        coin.style.transform="rotateX(45deg)"
    }
    else
    {
        title.innerText="TAIL"
        coin.style.transform="rotateX(135deg)"
    }
    coin.classList.remove("animate")
    roll_button.disabled=false
    },1500)
}