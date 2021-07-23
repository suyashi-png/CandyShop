var gameState = 1
var form

function preload(){
  //load images here
  bg11 = loadImage ("images/bg1.jpg")
  bg12 = loadImage ("images/B1.Jpg")
  bg13 = loadImage ("images/B2.jpg")
  bg13 = loadImage ("images/B3.jpg")
  c1 = loadImage ("images/C1.jpg")
  c2 = loadImage ("images/c2.jpg")
  c3 = loadImage ("images/C3.jpg")
  c4 = loadImage ("images/c4.jpg")
  c5 = loadImage ("images/chocolate-fountain.jpg")
  bg1 = loadImage ("images/firstbg.jpg")
  police1 = loadImage ("images/policemen1.jpg")
  police2 = loadImage ("images/policemen2.jpg")
  police3= loadImage ("images/policemen3.jpg")
  bg2 = loadImage ("images/secondbg.jpg")
  theifImage = loadImage ("images/theif.jpg")







}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form()
  

  player = createSprite(50,50,30,30)
  player.shapeColor = "red"

  policemen1= createSprite(600,600,20,20);
  policemen1.addImage(police1)
  policemen2= createSprite(600,20,20,20);
  policemen2.addImage(police2)
  policemen3= createSprite(600,300,20,20);
  policemen3.addImage(police3)
  
  block1 = createSprite(400, 200, 500, 20);
  block2 = createSprite(625, 250, 20, 100);
  block3 = createSprite(400, 500, 500, 20);
  block4 = createSprite(625, 450, 20, 100);
  block5= createSprite(700, 210, 510, 27);
  block6 = createSprite(250, 280, 590, 30);
  block7 = createSprite(450, 100, 200, 20);
  block8 = createSprite(410, 230, 100, 50);
  block9 = createSprite(390, 150, 525, 20);
  block10 = createSprite(800, 220, 150, 40);
  block11 = createSprite(600, 180, 520, 20);
  block12 = createSprite(684, 238, 511, 60);
  block13 = createSprite(442, 140, 200, 20);
  block14 = createSprite(607, 200, 500, 60);
  block15 = createSprite(400, 200, 500, 20);
  block16 = createSprite(403, 250, 500, 30);
  block17 = createSprite(430, 300, 200, 20);
  block18 = createSprite(650, 200, 400, 20);
  block19 = createSprite(400, 300, 500, 80);
  block20 = createSprite(569, 257, 570, 20);
  block21 = createSprite(470, 250, 504, 20);
  block22 = createSprite(400, 250, 500, 20);
  block23 = createSprite(800, 200, 600, 20);
  block24 = createSprite(460, 200, 500, 60);
  block25 = createSprite(200, 300, 500, 20);
  block26 = createSprite(400, 300, 500, 20);
  block27 = createSprite(600, 280, 540, 20);
  block28 = createSprite(420, 200, 300, 20);
  bloc29 = createSprite(700, 200, 400, 20);
  block30 = createSprite(200, 200, 600, 30);
  block31 = createSprite(470, 300, 560, 20);
  block33 = createSprite(640, 300, 500, 80);
  block32 = createSprite(470, 400, 500, 40);
  block34 = createSprite(700, 200, 400, 40);




  candiesGroup= createGroup()

}

function draw() {
  background(255,255,255); 
  //game Start
  if(gameState === 0){
    form.display();
  } 
  
  //play game
  if(gameState === 1){
    player.bounceOff(block1) 
    
    //moving player up
    if(keyDown("up")){
      player.y-=20
    }
    spawncandies()

  }

  else if(gameState === 2){
    //story
    textSize(55)
    fill("yellow")
    text("",100,200)
    //form.button1.show()
  }

  else if (gameState === 3){
    //how to play
    textSize(55)
    fill("yellow")
    text("",100,400)
  }

  else if (gameState === 4){
    //select bg

  }

  else if (gameState === 5){
    //rules
    textSize(45)
    fill("yellow")
    text("RULES: ",600,100)
    text("",50,160)
  }
  


  drawSprites();
}

//function to make candies
function spawncandies(){
  if(frameCount %10 ===0){
    candies = createSprite(random(0,1000),random(0,800),30,5)
    candies.shapeColor = "purple"
    candies .velocityX = -6
    candies .lifetime = 400
    var r  = Math.round(random(1,5))
    console.log(r)
    switch(r){
      case 1: candies.addImage(c1)
      break;
      case 2: candies.addImage(c2)
      break;
      case 3: candies.addImage(c3)
      break;
      case 4: candies.addImage(c4)
      break;
      case 5: candies.addImage(c5)
      break;
      default: break;
    }
    candiesGroup.add(candies)
  }
}
// function to move police (AI)



//homework
//1) make the layout of maze game
//2) make player bounce off all the blocks
//3) make player move with up, down, left keys
//4) load all images
