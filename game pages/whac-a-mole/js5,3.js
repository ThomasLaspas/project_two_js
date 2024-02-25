const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const time=document.getElementById("time")
const score=document.getElementById('score')
const btn=document.getElementById("btn")

let result =0
let hitposition
let currentTime=60
let timer=null


function randomSquares(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })
    let randomSquares=squares[Math.floor(Math.random()*squares.length)]
    randomSquares.classList.add('mole')
    hitposition=randomSquares.id
   
}
squares.forEach(square => {
    square.addEventListener("click", function(){
        if(square.id==hitposition){
            result++
            score.textContent="Your score:"+result
        }
    })
})


function moveAll(){
    
    timer=setInterval(randomSquares,800)
}
moveAll()

function countdown(){
currentTime--
time.textContent="Time left: "+currentTime
if(currentTime===0){
    clearInterval(countdowntimer)
    clearInterval(timer)
    alert("game over your final score is: "+result)
    result=0
   
}
}

let countdowntimer=setInterval(countdown,1000)

btn.addEventListener("click",function(){
    if(currentTime===0){
        score.textContent="Your score:"+result
    currentTime=60
    moveAll()
    countdown()
    let countdowntimer=setInterval(countdown,1000)}
})