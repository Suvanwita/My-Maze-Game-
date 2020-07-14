const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//Create variables here
var box1,box2,box3,box4,box5,box6,box7;
var ball;

function preload()
{
  //load images here
 
}

function setup() {
  //to create a canvas
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

    //create ball
    ball=new Ball(30,30,40,40);

    //create question marks
    ques1=new Question(130,168,30,20);
    ques2=new Question(280,120,30,20);
    ques3=new Question(313,279,30,20);
    ques4=new Question(30,370,30,20);
    ques5=new Question(265,500,30,20);
    ques6=new Question(40,580,30,20);
   

    //create boxes
    box1=new Box(10,70,180,10);
    box2=new Box(105,105,10,80);
    box3=new Box(150,70,10,160);
    box4=new Box(200,150,100,10);
    box5=new Box(255,80,110,10);
    box6=new Box(315,40,10,400);
    box7=new Box(52,170,10,100);
    box8=new Box(58,225,140,10);
    box9=new Box(130,300,300,10);
    box10=new Box(215,260,10,100);
    box11=new Box(400,150,10,300);
    box12=new Box(355,170,90,10);

    box13=new Box(100,640,10,200);
    box14=new Box(100,470,220,10);
    box15=new Box(65,380,10,50);
    box16=new Box(250,350,360,10);
    box17=new Box(150,410,180,10);
    
    box18=new Box(300,480,10,250);
    box19=new Box(52,170,10,100);
    box20=new Box(58,225,140,10);
    box21=new Box(130,300,300,10);
    box22=new Box(215,260,10,100);
    box23=new Box(400,160,10,350);
    box24=new Box(355,170,90,10);
 
}


function draw() {  
  background(237, 149, 232);
  
  Engine.update(engine);


  //display the ball
  ball.display();

  //help to find the desired x & y positions
  console.log(mouseX,mouseY);


  //display the boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  ques1.display();
  ques2.display();
  ques3.display();
  ques4.display();
  ques5.display();
  ques6.display();

    drawSprites();

  
}

//for player to move the ball in tne maze
function keyPressed(){
  if(keyCode===38){
    //up arrow
    ball.y=ball.y-5;
  }
  if(keyCode===40){
    //down arrow
    ball.y=ball.y+5;
  }
  if(keyCode===37){
    //left arrow
    ball.x=ball.x-5;
  }
  if(keyCode===39){
    //right arrow
    ball.x=ball.x+5;
  }
}


