'use strict';
// let f=document.querySelector('.message');
// console.log(f);
// console.log(document.querySelector('.message').textContent);



let s_num= Math.trunc(Math.random()*50+1);
let score=20;
let highscore=0;

document.querySelector('.again').addEventListener('click',function () 
{
document.querySelector('.number').textContent='?';
document.querySelector('.message').textContent='start guessing...';
document.querySelector('.score').textContent='20';
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.number').style.width="15rem";
document.querySelector('.guess').value='';
score=20;
s_num= Math.trunc(Math.random()*50+1);
document.body.style.backgroundImage = "";
document.body.style.backgroundRepeat = "";
document.body.style.backgroundSize = ""
})



document.querySelector('.check').addEventListener('click',function () 
{  
   const f=Number(document.querySelector('.guess').value);

if(!f)
{
    document.querySelector('.message').textContent='No Number Entered🛑' ;
}
else if(f===s_num)
{
    document.querySelector('.message').textContent='Congo right number!!' ;
    document.querySelector('body').style.backgroundColor='blue';
    document.querySelector('.number').style.width="30rem";
    document.querySelector('.number').textContent=s_num;
    document.body.style.backgroundImage = "url('congo.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "500px 700px"
    // document.body.style.backgroundSize = "cover"
    if(score > highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
else if(f  > s_num  && score>1)
{
    document.querySelector('.message').textContent='Too high' ;
    score--;
    document.querySelector(".score").textContent=score;
}
else if(f < s_num && score>1)
{
    document.querySelector('.message').textContent='Too low' ;
    score--;
    document.querySelector(".score").textContent=score;
}
else{
    document.querySelector('.message').textContent='You lost';
    document.querySelector(".score").textContent=0;
}
})
