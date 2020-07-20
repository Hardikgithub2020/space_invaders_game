
audio = document.getElementById('soundEffect');
function sound(){
    audio.play();
}

audio1 = document.getElementById('cat');
function sound1(){
    audio1.play();
}

uss = {
    top: 300,
    left: 50,
};

missiles = [];

enemies = [
    {top: 900, left: 2200},
    {top: 600, left: 3000},
    {top: 700, left: 1900},
    {top: 300, left: 2100},
    {top: 50, left: 1700},
    {top: 800, left: 2800}
];

// function randomPiece(){
//     let randomN = Math.floor(Math.random()*enemies.length);
//     return new randomPiece(enemies[ramdomN][0], enemies[randomN][1]);
// }

document.onkeydown = function(e){
    if(e.keyCode === 37){
        uss.left = uss.left - 10;
        moveUss1()
    }
    else if(e.keyCode === 39){
        uss.left = uss.left + 10;
        moveUss1()
    }
    else if(e.keyCode === 38){
        uss.top = uss.top - 10;
        moveUss2()
    }
    else if(e.keyCode === 40){
        uss.top = uss.top + 10;
        moveUss2()
    }
    else if(e.keyCode === 32){
        console.log("FIRE! You are attacking a Corona Virus!")
        audio1.play()
        audio.play()
        missiles.push({
            left: uss.left,
            top: uss.top
        });
        drawMissiles()
        

    }

}


        

function moveUss1(){
    document.getElementById('uss').style.left = uss.left + "0.3px";
}

function moveUss2(){
    document.getElementById('uss').style.top = uss.top + "px";
}

function drawMissiles(){
    document.getElementById('missiles').innerHTML = "";
    for(missile = 0; missile < missiles.length; missile++){
        document.getElementById('missiles').innerHTML +=
        `<div class='missile' style='left: ${missiles[missile].left}px;
        top: ${missiles[missile].top}px'></div>`
    }
} 

function moveMissiles(){
    for(missile = 0; missile < missiles.length; missile++){
        missiles[missile].left = missiles[missile].left + 500;
    }
   
}

function drawEnemies(){
    document.getElementById('enemies').innerHTML = "";
    for(enemy = 0; enemy < enemies.length; enemy = enemy + 1){
        document.getElementById('enemies').innerHTML += 
        `<div class='enemy' style='left:${enemies[enemy].left}px; 
        top:${enemies[enemy].top}px'></div>`;
    }
    }

    function moveEnemies(){
        // for(i = 0; i < enemies.length; i++){
        //     turn = enemies[i];
        //     switch(turn){
        //         case 
        //     }
        // }

        // for(enemy in enemies){
        //     enemies[enemy].left = enemies[enemy].left - 3;
        // }

        for(enemy = 0; enemy < enemies.length; enemy++){
            enemies[enemy].left = enemies[enemy].left - 5;
        }
    }

    function collisionDetection(){
        for(enemy = 0; enemy < enemies.length; enemy++){
            for(var missile = 0; missile < missiles.length; missile = missile + 1){
                if(
                    (missiles[missile].left >= enemies[enemy].left ) &&
                    (missiles[missile].top <= enemies[enemy].top )

                ){                
                    console.log("You KILLED a Corona Virus!!!");
                    enemies.splice(enemy, 1);
                    missiles.splice(missile, 1);
                }
                
        }
        }
        
    }


function gameLoop(){
    setTimeout(gameLoop, 200)
    moveMissiles() 
    drawMissiles()
    moveEnemies()
    drawEnemies()
    collisionDetection()
}

gameLoop();