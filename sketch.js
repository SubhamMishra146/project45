var player,playerImg1,playerImg2,playerImg3;
var gamestate;
var menu;
var ground;
var backgroundImg,carImg;
var boosterImg,obstacleImg,reducerImg;
var obstaclesGroup,boostersGroup,reducersGroup;
var life=3;
var speed=3;
var count=0;
var flag=0;
var restart;
var switchOn,switchOff,switchOnImg,switchOffImg ;
var score;


function preload(){
    backgroundImg=loadImage("images/track.jpg");
    carImg=loadImage("images/car.png");
    boosterImg=loadImage("images/booster.png");
    reducerImg=loadImage("images/reducer.png");
    obstacleImg=loadImage("images/obstacle.png");
    switchOnImg=loadImage("images/switchon.png");
    switchOffImg=loadImage("images/switchoff.png");

}
function setup(){
    createCanvas(displayWidth,displayHeight);
    menu=new Menu();
    menu.display();

 
}