// $(document).ready(function(){
// console.log(" connected")
// });
//var arr=[['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];
var player1 ='x';
var player2='o';
var currentplayer = 0;
square=[];
var Board = document.querySelectorAll('.gameboard');
//var startgame =document.addEventListener('.button');
console.log(Board);
/* startgame.addEventListener('click',(){
});*/
var checkwinner =function(){
    for(var i=1; i<=9 ;i++){
        square[i]=document.getElementById(i).innerHTML;
        } // hirozintal
           if(square[1]==square[2] && square[2]==square[3] && square[1]!=""){
         alert(" player " +square[1]+ " wins the game");
         console.log(" player " +square[1]+ " wins the game");
        }  if(square[4]==square[5] && square[5]==square[6] && square[4]!=""){
         alert(" player " +square[4]+ " wins the game");
         console.log(" player " +square[4]+ " wins the game");
        }  if(square[7]==square[8] && square[8]==square[9] && square[7]!=""){
         alert(" player " +square[7]+ " wins the game");
         console.log(" player " +square[7]+ " wins the game");
        }  
        // vertical
        if(square[1]==square[4] && square[4]==square[7] && square[1]!=""){
         alert(" player " +square[1]+ " wins the game");
         console.log(" player " +square[1]+ " wins the game");
        }  if(square[2]==square[5] && square[5]==square[8] && square[2]!=""){
         alert(" player " +square[2]+ " wins the game");
         console.log(" player " +square[2]+ " wins the game");
        }  if(square[3]==square[6] && square[6]==square[9] && square[3]!=""){
         alert(" player " +square[3]+ " wins the game");
         console.log(" player " +square[3]+ " wins the game");
        } 
        // 
        if(square[1]==square[5] && square[5]==square[9] && square[1]!=""){
         alert(" player " +square[1]+ " wins the game");
         console.log(" player " +square[1]+ " wins the game");
        }  if(square[3]==square[5] && square[5]==square[7] && square[3]!=""){
         alert(" player " +square[3]+ " wins the game");
         console.log(" player " +square[3]+ " wins the game");
        }
    }

var insert =function(id){
    if(currentplayer == 0){
    document.getElementById(id).innerHTML="x";
    currentplayer != currentplayer;
    currentplayer = 1;
} else if(currentplayer == 1){
    document.getElementById(id).innerHTML="o";
    currentplayer = 0;
}
checkwinner();
}

var b=document.getElementById('button');
var resetboard =function(){
    location.reload()
}
b.addEventListener('click', resetboard);

// setTimeout(function(){
// location.reload()}),2000}

var winner = document.getElementById('winner')

var draw = function(){

}
var newgame=function(){


}



















/*var score = function(s1,s2){
document.getElementById(id)
}*/
       /* arr2;
        Board[i]=function(){
        
            if (currentplayer===0){
                console.log(player1)
               } else if(currentplayer ===1){
                console.log(player2)
               }
        }
        
        }
})*/
/*for(var i=0;i<Board.lenght; i++){

Board[i]=function(){

    if (currentplayer===0){
        console.log(player1)
       } else if(currentplayer ===1){
        console.log(player2)
       }
}
}*/
/*Board.forEach(function(ind){
    ind.addEventListener('.boards')
});
var put = (function(squareID,player){
arr[squareID]=player;
document.getElementById(squareID).innerHTML=player;

})
var click = document.addEventListener('click',function (square){
     if (currentplayer=0){
      console.log(player1)
     } else if(currentplayer =1){
      console.log(player2)
     }
put(square.target.id,player2)
});
//jquery
/*console.log($('.button'))
$('.button').click(function(){

    console.log(Attr('.boards'));
    if(currentplayer=0){
    console.log("player x")
    $(this).Text(player1)
    
    
    currentplayer=1;
    } else if(currentplayer ==1){
        console.log("player o")
        $(this).Text(player2)
    }
})*/
/*var resetboard =function(n1,n2,n3){
    document.getElementById(id,n1)
    document.getElementById(id,n2)
    document.getElementById(id,n3)

setTimeout(function(){
    location.reload()}),2000}*/


