const time=document.querySelector('.time')
const result=document.getElementById('result')
const btn=document.querySelector('.btn')
const squares=document.querySelectorAll('.grid div')
const left=document.querySelectorAll('.left')
const right=document.querySelectorAll('.right')
const cleft=document.querySelectorAll('.cars-left')
const cright=document.querySelectorAll('.cars-right')
let currentIndex=76
const width =9
let timerId
let res=0
let srt=true

//for timer
function createProgressbar(id, duration, callback) {
    // We select the div that we want to turn into a progressbar
    let progressbar = document.getElementById('div');
    progressbar.className = 'progressbar';
  
    // We create the div that changes width to show progress
    let progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    // Now we set the animation parameters
    progressbarinner.style.animationDuration = duration;
  
    // Eventually couple a callback
    if (typeof(callback) === 'function') {
      progressbarinner.addEventListener('animationend', callback);
    }
  
    // Append the progressbar to the main progressbardiv
    progressbar.appendChild(progressbarinner);
  
    // When everything is set up we start the animation
    progressbarinner.style.animationPlayState = 'running';
  }


  
  addEventListener('load', function() {
    createProgressbar('progressbar1', '60s',function() {
        alert('times out');
        clearInterval(timerId)
      });});
   
   
   
 


//move frog
function movefrog(e){
    squares[currentIndex].classList.remove('frog')
switch (e.key){
    
    case 'ArrowLeft':
        if(currentIndex%width !==0)currentIndex --
        break;
     case 'ArrowRight':
        if(currentIndex%width <=width-1) currentIndex ++
        break;
        case 'ArrowUp':
            if(currentIndex-width >=0) currentIndex -=width
        break;
        case 'ArrowDown':
            if(currentIndex +width<=squares.length)  currentIndex +=width
        break;
}

squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', movefrog)
//move inviroment
function automovelements(){
    automovel()
    automovelc()
    automover()
    automoverc()
    lose()
    point()
}

function automovel(){
    left.forEach(logleft => moveleft(logleft))
    
}

function moveleft(logleft){
    switch(true){
case logleft.classList.contains('l1'):
     logleft.classList.remove('l1')
     logleft.classList.add('l2')
     break
     case logleft.classList.contains('l2'):
     logleft.classList.remove('l2')
     logleft.classList.add('l3')
     break
     case logleft.classList.contains('l3'):
     logleft.classList.remove('l3')
     logleft.classList.add('l4')
     break
     case logleft.classList.contains('l4'):
     logleft.classList.remove('l4')
     logleft.classList.add('l5')
     break 
     case logleft.classList.contains('l5'):
     logleft.classList.remove('l5')
     logleft.classList.add('l1')
     break
     


    }}

function automover(){
    right.forEach(logright => moveright(logright))
}


    function moveright(logright){
        switch(true){
    case logright.classList.contains('l5'):
         logright.classList.remove('l5')
         logright.classList.add('l1')
         break
         case logright.classList.contains('l1'):
         logright.classList.remove('l1')
         logright.classList.add('l2')
         break
         case logright.classList.contains('l2'):
         logright.classList.remove('l2')
         logright.classList.add('l3')
         break
         case logright.classList.contains('l3'):
         logright.classList.remove('l3')
         logright.classList.add('l4')
         break 
         case logright.classList.contains('l4'):
         logright.classList.remove('l4')
         logright.classList.add('l5')
         break
         
    
    
        }




}

function automovelc(){
    cleft.forEach(logcleft => movecleft(logcleft))
    
}

function movecleft(logcleft){
    switch(true){
case logcleft.classList.contains('p1'):
     logcleft.classList.remove('p1')
     logcleft.classList.add('p2')
     break
     case logcleft.classList.contains('p2'):
     logcleft.classList.remove('p2')
     logcleft.classList.add('p3')
     break
     case logcleft.classList.contains('p3'):
     logcleft.classList.remove('p3')
     logcleft.classList.add('p4')
     break
     case logcleft.classList.contains('p4'):
     logcleft.classList.remove('p4')
     logcleft.classList.add('p5')
     break 
     case logcleft.classList.contains('p5'):
     logcleft.classList.remove('p5')
     logcleft.classList.add('p1')
     break
     


    }}

function automoverc(){
    cright.forEach(logcright => movecright(logcright))
}


    function movecright(logcright){
        switch(true){
    case logcright.classList.contains('p5'):
         logcright.classList.remove('p5')
         logcright.classList.add('p4')
         break
         case logcright.classList.contains('p4'):
         logcright.classList.remove('p4')
         logcright.classList.add('p3')
         break
         case logcright.classList.contains('p3'):
         logcright.classList.remove('p3')
         logcright.classList.add('p2')
         break
         case logcright.classList.contains('p2'):
         logcright.classList.remove('p2')
         logcright.classList.add('p1')
         break 
         case logcright.classList.contains('p1'):
         logcright.classList.remove('p1')
         logcright.classList.add('p5')
         break
         
    
    
        }




}
//lose
function lose(){
    if( squares[currentIndex].classList.contains('p4')||
    squares[currentIndex].classList.contains('l4')||
    squares[currentIndex].classList.contains('l5')
){
result.textContent="You lose"
clearInterval(timerId)

    }
}

function point(){
    if(squares[currentIndex].classList.contains('ending')){
        res++
        result.textContent+=res
        squares[currentIndex].classList.remove('frog')
        currentIndex=76
    }
}




btn.addEventListener("click",function(){
if(timerId){
    clearInterval(timerId)
    document.removeEventListener("keyup",movefrog)
}else{
    timerId=setInterval(automovelements,800)
    document.addEventListener("keyup",movefrog)
}
})
