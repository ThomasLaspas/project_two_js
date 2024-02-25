const id=document.getElementById("grid")
let cardsChoosen=[]
let cardname=[]
let cardsWon=[]
const result=document.getElementById("result")
const card =[{
    name: 'AMG GT',
    img:'../../images/amg gt.jpeg'
},
{
    name: 'AMG one',
    img:'../../images/amg one.jpg'
},
{
    name: 'C63 AMG ',
    img:'../../images/C63 AMG.jpeg'
},
{
    name: 'E63 AMG',
    img:'../../images/e63 amg.jpeg'
},
{
    name: 'GT 63',
    img:'../../images/GT 63.jpeg'
},
{
    name: 'W11',
    img:'../../images/w11 amg.jpeg'
},
{
    name: 'AMG GT',
    img:'../../images/amg gt.jpeg'
},
{
    name: 'AMG one',
    img:'../../images/amg one.jpg'
},
{
    name: 'C63 AMG ',
    img:'../../images/C63 AMG.jpeg'
},
{
    name: 'E63 AMG',
    img:'../../images/e63 amg.jpeg'
},
{
    name: 'GT 63',
    img:'images/GT 63.jpeg'
},
{
    name: 'W11',
    img:'../../images/w11 amg.jpeg'
}

]

card.sort(()=>0.5-Math.random())


function createboard(){
    for(i=0; i<card.length; i++){
       const img= document.createElement('img')
       img.setAttribute("src",'../../images/Mercedes Benz.jpeg')
       img.setAttribute("width","150px")
       img.setAttribute("height","75px")
       img.setAttribute("data-id",i)
       img.addEventListener("click", flipcard )
       id.appendChild(img)
    }
}
createboard()

function flipcard(){
    const cardId=this.getAttribute('data-id')
    cardsChoosen.push(card[cardId].name)
    cardname.push(cardId)
    this.setAttribute("src",card[cardId].img)
if(cardsChoosen.length=== 2){
    setTimeout(checkmatch,1000)
}
}

function checkmatch(){
   const cards=document.querySelectorAll('img')

if(cardname[0]== cardname[1]){
    alert('you clicked the same img')
}

   if(cardsChoosen[0] == cardsChoosen[1]){
    alert('you found a match')
    cards[cardname[0]].setAttribute("src","images/mercedes.png")
    cards[cardname[1]].setAttribute("src","images/mercedes.png")
    cards[cardname[0]].removeEventListener('click',flipcard)
    cards[cardname[1]].removeEventListener('click',flipcard)
    cardsWon.push(cardsChoosen)
   }
   else{
    cards[cardname[0]].setAttribute("src","images/Mercedes Benz.jpeg")
    cards[cardname[1]].setAttribute("src","images/Mercedes Benz.jpeg")
   }
   result.textContent=cardsWon.length
   cardsChoosen=[]
   cardname= []
        
    }
