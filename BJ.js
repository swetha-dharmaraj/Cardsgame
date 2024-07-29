let cards=[]
let sum=0;
let isAlive=false;
let hasJack=false;
let textdis=document.getElementById("text-dis");
let sumn=document.querySelector(".sum");
let card=document.querySelector(".card");
let player={
    name:"swetha",
    amnt:200
}
let plyr=document.querySelector(".plyr");
plyr.textContent=player.name +" : $ "+player.amnt;
function onStart()
{
    isAlive=true;
    renderGame();
}
function reSet()
{
    cards=[];
    card.textContent="Card: "+cards;
    sum=0;
    sumn.textContent="Sum: ";
    let element=document.getElementById("cards_disp")
    element.replaceChildren();
}
function renderGame()
{
   /*  if(isAlive==true)
    {
        document.getElementById(".reset").disabled = true;
    }
    else{

        document.getElementById(".reset").disabled = false;
    } */
    if(cards.length==0){
    let firstCard= randomNum();
    let secondCard=randomNum();
    cards=[firstCard,secondCard];
    sum=cards[0]+cards[1];
    setCArd(firstCard);
    setCArd(secondCard);    
    }
    card.textContent="Card: "
    for(let i=0;i<cards.length;i++)
    {
        card.textContent+=cards[i]+" ";
    }
    if(sum<21)
    {
        isAlive=true;
        message="Do you want to draw a card ?";
        console.log("Do you want to draw a card");
    }
    else if(sum===21)
    {
        hasJack=true;
        message="You got Blackjack !";
        console.log("you got Blackjack !");
    }
    else if(sum>21)
    {
        isAlive=false;
        message="You out of game";
        console.log("you out of game");
    }
    textdis.textContent=message;
    sumn.innerText="Sum :"+" "+sum;
    
}

function setCArd(num)
{
    let imgCard=document.createElement("img");
    imgCard.src ="./spade/"+num+".png";   
    console.log(imgCard.src); 
    document.getElementById("cards_disp").append(imgCard)
}

function newCard()
{
    if(isAlive===true && hasJack==false)
    {
        let thirdcard=randomNum();
        sum+=thirdcard;
        cards.push(thirdcard);
        setCArd(thirdcard);
        console.log(cards);
        renderGame();
    }
    else{
        textdis.textContent="Max card reached ! !";
    }
}
function randomNum()
{
    let ranCard=Math.floor(Math.random() * 13);
    if(ranCard==0||ranCard==1)
    {
        return 11;
    }
    if(ranCard===1)
    {
        return 11;
    }
    else{
        return ranCard;
    }
}