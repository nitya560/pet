//Create variables here
var dog,dogImg1,dogImg2,datbase,foodS,foodStock

function preload()
{
dogImg1=loadImage("images/dogImg.png")
dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()

  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg1)
  dog.scale=0.15


foodStock=database.ref('food')
foodStock.on("value",readstock)
}


function draw() {  
background("green")
if(keyWentDown(UP_ARROW)){
  writestock(foodS)
  dog.addImage(dogImg2)
}

  drawSprites();
  stroke(0)
  text("Food Remaining: "+foodS,170,200)
textSize(15)
text("Press Up to feed the dog",130,10,300,20)

}
function readstock(data){
  foodS=data.val()
}

function writestock(x) {
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}
