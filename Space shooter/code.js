var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["06047216-2a5a-4902-bb48-acb23e08bc7d","717a542e-15ff-4b16-bb5e-da3f28e204a2","c5c30876-1f77-4e38-86a8-7260b482e8ee","b84b2c50-5d02-42af-91c2-f99290dac42d","7c00b664-0d3e-425b-87d8-cb1ed7ca7af1","457d4a66-96a4-4253-8ef9-c2f424b2af65","02479947-7545-4dc6-9302-5e17b4f972d4","58810470-a1b7-43e3-bbf4-5f9fcec45c06","1b335b1a-c73e-4596-9310-0a16f6a3fa14","97437deb-8595-44c5-a001-e132644f2027","d678e8a3-0143-4f49-9d3e-4ad02990054a","f22d2bcc-a270-4e5f-aad9-b079e8b01654","b14eab7b-3223-4800-aed9-19c858f14e9f"],"propsByKey":{"06047216-2a5a-4902-bb48-acb23e08bc7d":{"name":"ship","sourceUrl":null,"frameSize":{"x":30,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"WMPE3pSOWuGrBtMGQ7CrqPULQyenpckq","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":49},"rootRelativePath":"assets/06047216-2a5a-4902-bb48-acb23e08bc7d.png"},"717a542e-15ff-4b16-bb5e-da3f28e204a2":{"name":"enemy","sourceUrl":null,"frameSize":{"x":30,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"V2RgW8TwIUByXsl0S06wemLjgsbtSva_","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":37},"rootRelativePath":"assets/717a542e-15ff-4b16-bb5e-da3f28e204a2.png"},"c5c30876-1f77-4e38-86a8-7260b482e8ee":{"name":"playerShip","sourceUrl":"assets/api/v1/animation-library/h1LQjXJb77dmng_hdIjS6gJB3gdiCPcB/category_vehicles/playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"h1LQjXJb77dmng_hdIjS6gJB3gdiCPcB","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/h1LQjXJb77dmng_hdIjS6gJB3gdiCPcB/category_vehicles/playerShip3_blue.png"},"b84b2c50-5d02-42af-91c2-f99290dac42d":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"nyXl6vEQyPPDjeQq8B.NcZ4clU.ADiCO","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/b84b2c50-5d02-42af-91c2-f99290dac42d.png"},"7c00b664-0d3e-425b-87d8-cb1ed7ca7af1":{"name":"grass","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"9E4oZPqR819JRwdMbftlGhsdieTElQ4k","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/7c00b664-0d3e-425b-87d8-cb1ed7ca7af1.png"},"457d4a66-96a4-4253-8ef9-c2f424b2af65":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"sc41d9KSpJP47Yo.q5UvNm91tOjGE.YA","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/457d4a66-96a4-4253-8ef9-c2f424b2af65.png"},"02479947-7545-4dc6-9302-5e17b4f972d4":{"name":"space image.png_1","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"KPo48VBotZlR2UqUEL5R9F8fuUdi5Eyl","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/02479947-7545-4dc6-9302-5e17b4f972d4.png"},"58810470-a1b7-43e3-bbf4-5f9fcec45c06":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/9HfWWIAEPsb37dxbPayqZeE1qKKsmG5S/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9HfWWIAEPsb37dxbPayqZeE1qKKsmG5S","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/9HfWWIAEPsb37dxbPayqZeE1qKKsmG5S/category_backgrounds/background_santa.png"},"1b335b1a-c73e-4596-9310-0a16f6a3fa14":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":600,"y":721},"frameCount":1,"looping":true,"frameDelay":12,"version":"OvRwV8gZBu4f1Q5uieRVNw0CobbDkMtJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":721},"rootRelativePath":"assets/1b335b1a-c73e-4596-9310-0a16f6a3fa14.png"},"97437deb-8595-44c5-a001-e132644f2027":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":254,"y":198},"frameCount":1,"looping":true,"frameDelay":12,"version":"PpQgZH8ejeIUjktz05re1zOmd1GzKqJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":254,"y":198},"rootRelativePath":"assets/97437deb-8595-44c5-a001-e132644f2027.png"},"d678e8a3-0143-4f49-9d3e-4ad02990054a":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"SYKzlR4IjTo4t1_OqavyMqG3T2YZHtW8","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/d678e8a3-0143-4f49-9d3e-4ad02990054a.png"},"f22d2bcc-a270-4e5f-aad9-b079e8b01654":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"xSQNwAb5uRTGEF7xlTgRZSmtZpvTwisY","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/f22d2bcc-a270-4e5f-aad9-b079e8b01654.png"},"b14eab7b-3223-4800-aed9-19c858f14e9f":{"name":"enemy4","sourceUrl":null,"frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"ethTzc14gkiwAeOOsTfViDS_zBpAV6I1","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/b14eab7b-3223-4800-aed9-19c858f14e9f.png"}}};
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

var space = createSprite(200, 200,600,600);
space.setAnimation("animation_1");
space.y = space.height/2;
space.scale = 3;

var bullet = createSprite(200, 360,5,15);
bullet.shapeColor = "red";

var ship = createSprite(200, 360);
ship.setAnimation("playerShip");
ship.scale = 0.5;

var score = 0;
 
//var enemy1 = createSprite(125, 50,20,20);
//enemy1.scale = 0.5;

//var enemy2 = createSprite(175, 50,20,20);
//enemy2.scale = 0.5;

//var enemy3 = createSprite(225, 50,20,20);
//enemy3.scale = 0.5;

//var enemy4 = createSprite(275, 50,20,20);
//enemy4.scale = 0.5;

//var enemy5 = createSprite(100, 100,20,20);
//enemy5.scale = 0.5;

//var enemy6 = createSprite(150, 100,20,20);
//enemy6.scale = 0.5;

//var enemy7 = createSprite(200, 100,20,20);
//enemy7.scale = 0.5;

//var enemy8 = createSprite(250, 100,20,20);
//enemy8.scale = 0.5;

//var enemy9 = createSprite(300, 100,20,20);
//enemy9.scale = 0.5;

//var enemy10 = createSprite(75, 150,20,20);
//enemy10.scale = 0.5;

//var enemy11 = createSprite(125, 150,20,20);
//enemy11.scale = 0.5;

//var enemy12 = createSprite(175, 150,20,20);
//enemy12.scale = 0.5;

//var enemy13 = createSprite(225, 150,20,20);
//enemy13.scale = 0.5;

//var enemy14 = createSprite(275, 150,20,20);
//enemy14.scale = 0.5;

//var enemy15 = createSprite(325, 150,20,20);
//enemy15.scale = 0.5;

//var enemy16 = createSprite(50, 200,20,20);
//enemy16.scale = 0.5;

//var enemy17 = createSprite(100, 200,20,20);
//enemy17.scale = 0.5;

//var enemy18 = createSprite(150, 200,20,20);
//enemy18.scale = 0.5;

//var enemy19 = createSprite(200, 200,20,20);
//enemy19.scale = 0.5;

//var enemy20 = createSprite(250, 200,20,20);
//enemy20.scale = 0.5;

//var enemy21 = createSprite(300, 200,20,20);
//enemy21.scale = 0.5;

//var enemy22 = createSprite(350, 200,20,20);
//enemy22.scale = 0.5;

//enemy1.setAnimation("enemyRed5_1");
//enemy2.setAnimation("enemyRed5_1");
//enemy3.setAnimation("enemyRed5_1");
//enemy4.setAnimation("enemyRed5_1");
//enemy5.setAnimation("enemyBlack1_1");
//enemy6.setAnimation("enemyBlack1_1");
//enemy7.setAnimation("enemyBlack1_1");
//enemy8.setAnimation("enemyBlack1_1");
//enemy9.setAnimation("enemyBlack1_1");
//enemy10.setAnimation("enemyBlue2_1");
//enemy11.setAnimation("enemyBlue2_1");
//enemy12.setAnimation("enemyBlue2_1");
//enemy13.setAnimation("enemyBlue2_1");
//enemy14.setAnimation("enemyBlue2_1");
//enemy15.setAnimation("enemyBlue2_1");
//enemy16.setAnimation("enemyGreen4_1");
//enemy17.setAnimation("enemyGreen4_1");
//enemy18.setAnimation("enemyGreen4_1");
//enemy19.setAnimation("enemyGreen4_1");
//enemy20.setAnimation("enemyGreen4_1");
//enemy21.setAnimation("enemyGreen4_1");
//enemy22.setAnimation("enemyGreen4_1");

var rand = randomNumber(1,100);
console.log(rand);

var enemygroup = createGroup();

function draw() {
 
background("white");

createEdgeSprites();

ship.collide(edges);

ship.x = World.mouseX;

space.velocityY = 3;

if (space.y>500) {
  space.y = space.height/2;
}

if (bullet.y === 360) {
 bullet.x = ship.x;
}
    
if (keyWentDown("Space")&&bullet.y === 360) {
 bullet.velocityY = -15;
 playSound("assets/category_explosion/8bit_explosion.mp3");
 
}
if (bullet.y<0) {
 reset();  
}

if (bullet.collide(enemygroup)) {
 enemygroup.destroyEach(); 
 reset();
 playSound("assets/category_explosion/retro_game_classic_explosion_2.mp3");
 stopSound("assets/category_explosion/8bit_explosion.mp3");
 score++;
}

//if (bullet.collide(enemy1)) {
//  reset();
//  enemy1.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy2)) {
//  reset();
//  enemy2.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy3)) {
//  reset();
//  enemy3.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy4)) {
//  reset();
//  enemy4.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy5)) {
//  reset();
//  enemy5.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy6)) {
//  reset();
//  enemy6.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy7)) {
//  reset();
//  enemy7.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy8)) {
//  reset();
//  enemy8.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy9)) {
//  reset();
//  enemy9.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy10)) {
//  reset();
//  enemy10.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy11)) {
//  reset();
//  enemy11.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy12)) {
//  reset();
//  enemy12.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy13)) {
//  reset();
//  enemy13.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy14)) {
//  reset();
//  enemy14.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy15)) {
//  reset();
//  enemy15.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy16)) {
//  reset();
//  enemy16.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy17)) {
//  reset();
//  enemy17.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy18)) {
//  reset();
//  enemy18.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy19)) {
//  reset();
//  enemy19.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy20)) {
//  reset();
//  enemy20.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy21)) {
//  reset();
//  enemy21.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}
//if (bullet.collide(enemy22)) {
//  reset();
//  enemy22.destroy();
//  playSound("assets/default.mp3", false);
//  stopSound("assets/category_explosion/8bit_explosion.mp3");
//}

 spawnenemy(); 
 
 drawSprites();
 
 fill("yellow");
 textSize(20);
 text("00"+score, 10, 25);
}

function spawnenemy() {
  
 if (World.frameCount % 60 === 0) {
  var enemy = createSprite(400,0,10,20);
  enemy.velocityY = 4;
  enemy.x = randomNumber(35,375);
  var rand = randomNumber(1,4);
  enemy.setAnimation("enemy"+rand);
  enemy.scale = 0.5;
  enemy.lifetime = 105;

  enemygroup.add(enemy);
 }  
}

function reset() {
  
 bullet.y = 360;
 bullet.velocityY = 0;

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
