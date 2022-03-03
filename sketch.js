var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  bg= loadImage ("assets/background.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)
form=new Form()
form.display()
}

function draw() {
  background(bg);
}
