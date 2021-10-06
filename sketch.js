var starImg,bgImg;
var star, starBody;
//crriando variavel fada e fada_img
var fada,fada_img;
var musica_de_fada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carregue a animação da fada
	fada_img = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	musica_de_fada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	musica_de_fada.play();
	//create fairy sprite and add animation for fairy
	
	fada = createSprite(130,520,20,20);
	fada.addAnimation("fada voando",fada_img);
	fada.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escreva o codigo para fazer a estrela parar na mão da fada
  if(star.y >470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  keyPressed();	
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escreva o codigo para mover a fada para esquerda e direita
	if (keyDown("left")) {
		fada.x = fada.x-4;
	}
	if (keyDown("right")) {
		fada.x = fada.x+4;
	}
	
}
