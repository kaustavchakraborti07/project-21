var canvas;
var music;
var floor1,floor2,floor3,floor4;

function preload(){
    music = loadSound("music.mp3");

    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  floor1.createSprite(200,200);
  floor2.createSprite(200,400);
  floor3.createSprite(200,600);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    floor1.display();
    floor2.display();
    floor3.display();



    //add condition to check if box touching surface and make it box

}
