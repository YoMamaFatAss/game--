var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ae816ab1-ae75-4490-a926-457d7c7a5cd2","96e49f4e-8a7d-423b-9f67-225574aad42a","02690c8b-8407-4add-8ffc-3486d5d312ba","4dc269f0-12a1-44d9-b721-671cefe8ebb5","8601fe19-ecf8-44f2-9485-8e40aa0a1edc"],"propsByKey":{"ae816ab1-ae75-4490-a926-457d7c7a5cd2":{"name":"bolinea","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"MPCOH_zBopWKxf1yNEePOaFS2We4YG3x","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/ae816ab1-ae75-4490-a926-457d7c7a5cd2.png"},"96e49f4e-8a7d-423b-9f67-225574aad42a":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":70,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"dsybqXLqbENsacRZCVVjvDlR_qb3zNfe","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":30},"rootRelativePath":"assets/96e49f4e-8a7d-423b-9f67-225574aad42a.png"},"02690c8b-8407-4add-8ffc-3486d5d312ba":{"name":"paredeazul","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"DXh8tK4tlkf8y6SnP8JGeKbtlzimn5Ir","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/02690c8b-8407-4add-8ffc-3486d5d312ba.png"},"4dc269f0-12a1-44d9-b721-671cefe8ebb5":{"name":"paredevermelha","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"4QGJQhknP_iMojBiAheXsSn83Fqi.oUu","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/4dc269f0-12a1-44d9-b721-671cefe8ebb5.png"},"8601fe19-ecf8-44f2-9485-8e40aa0a1edc":{"name":"fundinho top colorido do balacubacu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5c4I.GJY6bmR63LMcJXzIFfM9VBDlPKa","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8601fe19-ecf8-44f2-9485-8e40aa0a1edc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var fundo = createSprite(200, 200, 400, 400) ;
fundo.setAnimation("fundinho top colorido do balacubacu") ;
fundo.scale = 4 ;

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="AliceBlue";
box1.setAnimation("paredeazul") ;

var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="Seashell";
box2.setAnimation("paredevermelha") ;

var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="AliceBlue";
box3.setAnimation("paredeazul") ;

var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="Seashell";
box4.setAnimation("paredevermelha") ;

var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="AliceBlue";
box5.setAnimation("paredeazul") ;

var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="Seashell";
box6.setAnimation("paredevermelha") ;

var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="AliceBlue";
box7.setAnimation("paredeazul") ;

var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="Seashell";
box8.setAnimation("paredevermelha") ;

var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="Seashell";
box9.setAnimation("paredevermelha") ;

var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="AliceBlue";
box10.setAnimation("paredeazul") ;

var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="Seashell";
box11.setAnimation("paredevermelha") ;

var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="AliceBlue";
box12.setAnimation("paredeazul") ;

var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="Seashell";
box13.setAnimation("paredevermelha") ;

var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="AliceBlue";
box14.setAnimation("paredeazul") ;

var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="Seashell";
box15.setAnimation("paredevermelha") ;

var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="AliceBlue";
box16.setAnimation("paredeazul") ;

var raquete=createSprite(200,380,100,20);
raquete.shapeColor = "Bisque";
raquete.setAnimation("animation_1") ;

var bola=createSprite(200,200,20,20);
bola.shapeColor = "Thistle";
bola.setAnimation("bolinea") ;


var pontos = 0;
var gameState = "start" ;

function draw() {
  background("PaleTurquoise");
  
  raquete.x = World.mouseX ;
  
  createEdgeSprites() ;
  
    if (bola.isTouching(box16)) {
    bola.bounceOff(box16) ;
    box16.destroy() ;
    pontos++ ;
  }
  
  if (bola.isTouching(box15)) {
    bola.bounceOff(box15) ;
    box15.destroy() ;
    pontos++ ;
  }
  
  if (bola.isTouching(box14)) {
    bola.bounceOff(box14) ;
    box14.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box13)) {
    bola.bounceOff(box13) ;
    box13.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box12)) {
    bola.bounceOff(box12) ;
    box12.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box11)) {
    bola.bounceOff(box11) ;
    box11.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box10)) {
    bola.bounceOff(box10) ;
    box10.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box9)) {
    bola.bounceOff(box9) ;
    box9.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box8)) {
    bola.bounceOff(box8) ;
    box8.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box7)) {
    bola.bounceOff(box7) ;
    box7.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box6)) {
    bola.bounceOff(box6) ;
    box6.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box5)) {
    bola.bounceOff(box5) ;
    box5.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box4)) {
    bola.bounceOff(box4) ;
    box4.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box3)) {
    bola.bounceOff(box3) ;
    box3.destroy() ;
    pontos++ ;
  }
  
    if (bola.isTouching(box2)) {
    bola.bounceOff(box2) ;
    box2.destroy() ;
    pontos++ ;
  }
  
  if (bola.isTouching(box1)) {
    bola.bounceOff(box1) ;
    box1.destroy() ;
    pontos++ ;
  }
  
    if(gameState === "end"){
    /*if(pontos === 16){
      text("Você Venceu!",200,200);
    }else{
      text("Game Over",200,200);
    }
    ball.setVelocity(0,0);
    text("Pressione R para recomeçar");*/
    
  }
  
  
  
  
  
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(topEdge);
  bola.bounceOff(raquete);
  
    if(gameState === "start"){
    text("pressione espaço para começar",200,200);
    //mover a bola ao pressionar a tecla enter
    if(keyDown("space")){
      bola.velocityX = 5;
      bola.velocityY = 5;
      gameState = "play";
    }
  }
  
  if (keyDown("space")) {
   bola.velocityY = 3 ;
   bola.velocityX = -4 ;
}
textFont("serif3") ;
  textSize(21) ;
  text("Pontuação: "+pontos, 270, 30) ;
  
  drawSprites();
}

function reiniciarBola() {
  bola.setVelocity(0,0);
 bola.x = 200 ;
 bola.y = 200 ;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
