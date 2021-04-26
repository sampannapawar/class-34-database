var ball;
var database;
var ballposition;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ball_ref = database.ref ("ball/position")
    ball_ref.on ("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){

    database.ref("ball/position").set({
    x:ballposition.x+x,y:ballposition.y+y
    })
}
function readposition (data){
ballposition = data.val();
ball.x = ballposition.x;
ball.y = ballposition.y;

}