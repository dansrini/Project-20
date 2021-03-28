var ground,bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("backgroundImage",garden.png);
    catImg1 = loadAnimation("firstcatimage",cat1.png);
    catImg2 = loadAnimation("secondcatimage",cat2.png,cat3.png);
    catImg3 = loadAnimation("thirdcatimage",cat4.png);
    mouseImg1 = loadAnimation("firstmouseimage",mouse1.png);
    mouseImg2 = loadAnimation("secondmouseimage",mouse2.png,mouse3.png);
    mouseImg3 = loadAnimation("thirdmouseimage",mouse4.png);
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    ground = createSprite(400,400);
    ground.addImage("backgroundImage");
    cat = createSprite(500,500);
    cat.addAnimation("firstcatimage",cat1.png);
    mouse = createSprite(300,500);
    mouse.addAnimation("firstmouseimage",mouse1.png);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
            mouse.addAnimation("thirdmouseimage",mouse4.png);
            mouse.changeAnimation("thirdmouseimage");
            cat.addAnimation("thirdcatimage",cat4.png);
            cat.changeAnimation("thirdcatimage");
            cat.velocityX = 0;
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyPressed = LEFT_ARROW){
        mouse.addAnimation("secondmouseimage",mouse2.png,mouse3.png);
        mouse.changeAnimation("secondmouseimage");
        cat.addAnimation("secondcatimage",cat2.png,cat3.png);
        cat.changeAnimation("secondcatimage");
        cat.velocityX = -2;
    }

}
