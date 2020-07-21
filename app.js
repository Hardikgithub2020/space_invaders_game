
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
    {top: 400, left: 1100},
    {top: 1100, left: 2200},
    {top: 600, left: 2000},
    {top: 800, left: 1500},
    {top: 200, left: 2400},
    {top: 50, left: 1700},
    {top: 800, left: 2600}
];

kings = [
    {top: 200, left: 2900},
    // {top: 50, left: 2000},

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
        console.log("%cFIRE! You are attacking a Corona Virus!",
        "color:blue;font-family:system-ui;font-size:15px;-webkit-text-stroke: 1px black;font-weight:bold")
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
    for(enemy = 0; enemy < enemies.length; enemy++){
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

    score = 0;

    function getScore(){
        score = document.getElementById("count1");
        count1.innerHTML++

        if(count1.innerHTML == "8"){
            console.log("%cYou Win!!!",
                    "color:magenta;font-family:system-ui;font-size:90px;-webkit-text-stroke: 1px black;font-weight:bold")
        }

    }

     
    function collisionDetection(){
        for(enemy = 0; enemy < enemies.length; enemy++){
            for(var missile = 0; missile < missiles.length; missile = missile + 1){
                if(
                    (missiles[missile].left >= enemies[enemy].left ) &&
                    (missiles[missile].top <= enemies[enemy].top )

                ){                
                    console.log("%cYou KILLED a Corona Virus!!!",
                    "color:green;font-family:system-ui;font-size:25px;-webkit-text-stroke: 1px black;font-weight:bold")
                    enemies.splice(enemy, 1);
                    missiles.splice(missile, 1);
                    getScore();
                }
                
        }
        }
        
    }

    function drawKings(){
        document.getElementById('kings').innerHTML = "";
        for(king = 0; king < kings.length; king++){
            document.getElementById('kings').innerHTML += 
            `<div class='king' style='left:${kings[king].left}px; 
            top:${kings[king].top}px'></div>`;
        }
        }
    
        function moveKings(){
            for(king = 0; king < kings.length; king++){
                kings[king].left = kings[king].left - 5;
            }
        }
    
    function collisionDetectionKing(){
        for(king = 0; king < kings.length; king++){
            for(var missile = 0; missile < missiles.length; missile = missile + 1){
                if(
                    (missiles[missile].left >= kings[king].left ) &&
                    (missiles[missile].top <= kings[king].top )

                ){                
                    console.log("%cYou KILLED the KING!!!",
                    "color:red;font-family:system-ui;font-size:40px;-webkit-text-stroke: 1px black;font-weight:bold")
                    kings.splice(king, 1);
                    missiles.splice(missile, 1);
                    getScore();
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
    moveKings()
    drawKings()
    collisionDetection()
    collisionDetectionKing()
    
}

function gameStart(){
gameLoop();
}

function gameContinue(){
gameLoop();
}

function gameRetreat(){
gameLoop();
}

