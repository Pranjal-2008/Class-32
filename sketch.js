const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var gameState = "onSling";
var score = 0;

var birds = [];

function preload() {
   

    ChangeBackground();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(200,250);
    bird1 = new Bird(150,370);
    bird2 = new Bird(100,370);
    bird3 = new Bird (50,370);
    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird1);
    birds.push(bird);
    
    slingshot = new Slingshot(bird.body,{x:200,y:250});

  

}

function draw(){

    if (backgroundImg ){
    background(backgroundImg);
    }
    
    Engine.update(engine);
    textSize(25);
    stroke("white");
    text("SCORE : " +score,1000,50 );
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    platform.display();

    
    slingshot.display();

   
}

function mouseDragged(){
    if (gameState!="flying"){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}



function mouseReleased(){
    slingshot.fly();
    gameState = "flying";
}

function keyPressed(){
    if (keyCode === 32){
        bird.pos = [];
        Matter.Body.setPosition(bird.body,{x:200,y:250});
        slingshot.attatched(bird.body);
        gameState = "onSling";
    }
}

async function ChangeBackground (){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var Rjson = await response.json();
    var DateTime = Rjson.datetime;
    var hour = DateTime.slice(11,13);
    console.log(hour);

    if (hour>6&&hour<15){
        bg="sprites/bg.png";
    }
    else {
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}
