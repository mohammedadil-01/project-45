var rabbit,rabbitIMG;
var wall1,wall2,wall3,wall4,wall5,wall5;
var wall6,wall7,wall8,wall9,wall10,wall11;
var wall12,wall13,wall14,wall15,wall16,wall17;
var wall18,wall19,wall20,wall21,wall22,wall23;
var wall24,wall25,wall26;

function preload(){
  rabbitIMG = loadImage("images/rabbit.png");
}

function setup() {
  createCanvas(500,300);

  rabbit = createSprite(20,20,50,50);
  rabbit.addImage(rabbitIMG);
  rabbit.scale = 0.1;

  wall1 = createSprite(50,20,10,40);
  wall1.shapeColor = ("black");

  wall2 = createSprite(70,35,50,10);
  wall2.shapeColor = ("black");

  wall3 = createSprite(100,20,10,40);
  wall3.shapeColor = ("black");

  wall4 = createSprite(50,85,100,10);
  wall4.shapeColor = ("black");

  wall5 = createSprite(145,37,10,105);
  wall5.shapeColor = ("black");

  wall6 = createSprite(170,85,50,10);
  wall6.shapeColor = ("black");

  wall7 = createSprite(195,37,10,105);
  wall7.shapeColor = ("black");

  wall8 = createSprite(100,130,130,10);
  wall8.shapeColor = ("black");

  wall9 = createSprite(230,130,50,10);
  wall9.shapeColor = ("black");

  wall10 = createSprite(250,85,10,80);
  wall10.shapeColor = ("black");

  wall11 = createSprite(330,50,150,10);
  wall11.shapeColor = ("black");

  wall12 = createSprite(400,20,10,55);
  wall12.shapeColor = ("black");

  wall13 = createSprite(80,175,160,10);
  wall13.shapeColor = ("black");

  wall14 = createSprite(155,195,10,30);
  wall14.shapeColor = ("black");

  wall15 = createSprite(80,210,160,10);
  wall15.shapeColor = ("black");

  wall16 = createSprite(120,255,160,10);
  wall16.shapeColor = ("black");

  wall17 = createSprite(230,175,50,10);
  wall17.shapeColor = ("black");

  wall18 = createSprite(205,215,10,90);
  wall18.shapeColor = ("black");

  wall19 = createSprite(255,215,10,90);
  wall19.shapeColor = ("black");

  wall20 = createSprite(310,255,100,10);
  wall20.shapeColor = ("black");

  wall21 = createSprite(355,230,10,50);
  wall21.shapeColor = ("black");

  wall22 = createSprite(325,210,60,10);
  wall22.shapeColor = ("black");

  wall23 = createSprite(340,168,80,10);
  wall23.shapeColor = ("black");

  wall24 = createSprite(300,188,10,45);
  wall24.shapeColor = ("black");

  wall25 = createSprite(385,135,10,75);
  wall25.shapeColor = ("black");

  wall26 = createSprite(450,175,10,255);
  wall26.shapeColor = ("black");

}

function draw() { 
  background("white");  

  if (keyDown(UP_ARROW)) {
    rabbit.y = rabbit.y-3
  }
  
  if (keyDown(DOWN_ARROW)) { 
    rabbit.y = rabbit.y+3
  }
    
  if (keyDown(LEFT_ARROW)) {
    rabbit.x = rabbit.x-3;
  }
        
  if (keyDown(RIGHT_ARROW)) {
    rabbit.x = rabbit.x+3;
  }

  rabbit.bounce(wall1);
  rabbit.bounce(wall2);
  rabbit.bounce(wall3);
  rabbit.bounce(wall4);
  rabbit.bounce(wall5);
  rabbit.bounce(wall6);
  rabbit.bounce(wall7);
  rabbit.bounce(wall8);
  rabbit.bounce(wall9);
  rabbit.bounce(wall10);
  rabbit.bounce(wall11);
  rabbit.bounce(wall12);
  rabbit.bounce(wall13);
  rabbit.bounce(wall14);
  rabbit.bounce(wall15);
  rabbit.bounce(wall16);
  rabbit.bounce(wall17);
  rabbit.bounce(wall18);
  rabbit.bounce(wall19);
  rabbit.bounce(wall20);
  rabbit.bounce(wall21);
  rabbit.bounce(wall22);
  rabbit.bounce(wall23);
  rabbit.bounce(wall24);
  rabbit.bounce(wall25);
  rabbit.bounce(wall26);

  drawSprites();
}