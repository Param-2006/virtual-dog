//Create variables here
var dog,happyDog,database,foodS,foodStock;
var database;

function preload()
{
  //load images here
  image1=loadImage("images/dogImg.png");
  image2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(300,300);
  dog.addImage("dogImg",image1);
  foodS=0;
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStocks);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    dog.changeImage("dogImg",image2);
    foodS--;
    writeStock(foodS);
    
  }


  drawSprites();
  //add styles here

}

function readStocks(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


