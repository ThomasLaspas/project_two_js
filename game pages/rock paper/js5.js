const compuer=document.getElementById("computer")
const playerdisplay=document.getElementById("player")
const result=document.getElementById("result")
const btn=document.querySelectorAll("button")
let results
let player
let computerchoise

btn.forEach(btn=> btn.addEventListener("click",(e)=>{

    player=e.target.id
    playerdisplay.innerHTML=player
generateChoise()
resultt()
}))

function generateChoise(){
let number=Math.floor(Math.random()*btn.length)

if(number===1){
   
    computerchoise="Rock"
}
if(number===2){
    
    computerchoise="Paper"
}
if(number===3){
   
    computerchoise="Scissor"
}
compuer.innerHTML=computerchoise



}
function resultt(){
if (computerchoise === player )
{
    results="Draw"
    result.textContent=results
}

if(computerchoise==="Rock" && player==="Paper"){
    results="You win"
}
if(computerchoise==="Rock" && player==="Scissor"){
    results="You lost"
}
if(computerchoise==="Paper" && player==="Rock"){
    results="You lost"
}
if(computerchoise==="Paper" && player==="Scissor"){
    results="Player win"
}
if(computerchoise==="Scissor" && player==="Paper"){
    results="Computer won"
}
if(computerchoise==="Scissor" && player==="Rock"){
    results="Player win"
}
result.innerHTML=results

}

