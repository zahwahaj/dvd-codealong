var dvdImage;
var dvdX = 100;
var velocityX = 10;
var velocityY = 10;
var dvdY = 200;

function preload() {
 dvdImage = loadImage("dvdlogo.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);


}

function draw() {
  clear();
  image(dvdImage,dvdX,dvdY,200,200);
  dvdX = dvdX+velocity;
  dvdY = dvdY + velocity;
    if(dvdX == windowWidth || dvdX == 0)
    {
      velocityX = velocityX * -1;
    }
    if(dvdX == windowHeight || dvdY == 0)
    {
      velocityY = velocityY * -1;
    }




}
