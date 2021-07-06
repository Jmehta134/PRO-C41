class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;
     
            if(player.index===index){
              fill(255,0,0);
            }else{fill(0)}
            textAlign(CENTER); 
            textSize(20);
            text(allPlayers[plr].name,players[index -1].x,players[index - 1].y+20);

        }


        if(keyIsDown(RIGHT_ARROW)){
            player.distance-=10;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW)){
            player.distance+=10;
            player.update();
        }
        if(frameCount%50===0){
            var fruit=createSprite(random(0,1000),0,20,20);
            var r=round(random(1,5));
            fruit.velocityY=2;
            switch(r){
                case 1:fruit.addImage(fruit1_img);
                break;
                case 2:fruit.addImage(fruit2_img);
                break;
                case 3:fruit.addImage(fruit3_img);
                break;
                case 4:fruit.addImage(fruit4_img);
                break;
                case 5:fruit.addImage(fruit5_img);
                break;
                default:break;
            }
            fruitGroup.add(fruit);
        }
        

        
    }

    end(){
       console.log("Game Ended");
    }
}