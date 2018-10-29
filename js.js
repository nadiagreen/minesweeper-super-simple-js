   const numberOfMines = 10;
const gameSize = 100;   
for (let x = 0; x < gameSize; x ++)  {
    document.getElementById('game').innerHTML += '<div class = "block"></div>';
} 
const allblock = document.getElementsByClassName('block');
 let generateMines = function() {
   let mines = [];
     for ( let j = 0; j < numberOfMines;) {
        let m = Math.floor(Math.random() * allblock.length);
         if(!(allblock[m].is_mine)){
             allblock[m].is_mine = true;
             j++;
         }
        mines.push(m);
    }   
    return mines;
}
let mines = generateMines();
console.log(mines);
let mine_around = function(allblock) {
    for(let x = 0; x < allblock.length; x++) {
        allblock[x].index = x;
        if (allblock[x].is_mine){   
        for(let i = -11; i <  12; i++) {
           if(i != -8 && i != -7 && i != -6 && i != -5 && i != -4 && i != -3 && i != -2 &&
           i != 8 && i != 7 && i != 6 && i != 5 && i != 4 && i != 3 && i != 2 && i!= 0 &&
             (x + i) >= 0 && (x + i) < 100 ) {
 if(allblock[x + i].is_mine_around  == 4 ) {allblock[x + i].is_mine_around = 5;} 
 if(allblock[x + i].is_mine_around  == 3 ) {allblock[x + i].is_mine_around = 4;} 
 if(allblock[x + i].is_mine_around  == 2 ) {allblock[x + i].is_mine_around = 3;} 
 if(allblock[x + i].is_mine_around  == 1 ) {allblock[x + i].is_mine_around = 2;} 
 if(allblock[x + i].is_mine_around  == null ) {allblock[x + i ].is_mine_around = 1;}   
           }   
        }
      }
   }
}
mine_around(allblock);
let open = function(allblock){
    for ( let x = 0; x < allblock.length; x++){
     
        allblock[x].addEventListener('click', function(event){
            allblock[event.target.index].style.background =  'rgb( 153, 178, 208 )';
            if(allblock[event.target.index].is_mine){
                for(let m = 0; m < mines.length; m++){
                    allblock[mines[m]].style.background = 'yellow';
                    allblock[mines[m]].style.color = 'red';
                    allblock[mines[m]].innerHTML = '*';
                }
                alert('DEAD!!!');
            }
 else if(allblock[event.target.index].is_mine_around  ){ 
    allblock[event.target.index ].innerHTML = allblock[event.target.index].is_mine_around;
    for(let i = -11; i < 12; i++) {
        if(i != -8 && i != -7 && i != -6 && i != -5 && i != -4 && i != -3 && i != -2 && i != 0 &&
        i != 8 && i != 7 && i != 6 && i != 5 && i != 4 && i != 3 && i != 2 && 
          (event.target.index + i) >= 0 && (event.target.index + i) < 100 &&
         !( allblock[event.target.index + i].is_mine) && allblock[event.target.index + i].is_mine_around){
            allblock[event.target.index + i].innerHTML = allblock[event.target.index + i].is_mine_around;
        }
    }
 }
        });
       
    }
        
}
open(allblock);
 let win = function(){
     for (let x = 0; x < allblock.length; x++){
         let count = 0;
        allblock[x].index = x;
        allblock[x].oncontextmenu = function(event){
            event.preventDefault();
            allblock[x].innerHTML = 'F';
            
         for (let m = 0; m < mines.length; m++) {
             if(allblock[mines[m]].innerHTML == 'F'  ) {
                count++;
                 console.log(count);
                 if(count == numberOfMines ) {
                     alert('you won!!');
                 }
             }
             }
         } 
 }
 }
win(); 

console.log('my game is fine');
 

