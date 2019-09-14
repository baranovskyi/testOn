import {MainPort } from "./port";
// import {MainShip} from "./ships";
import * as PIXI from 'pixi.js-legacy';

const renderer = PIXI.autoDetectRenderer( {
  width: 900,
  height: 600,
  backgroundColor: 0x1a5fb3
});
	
let stage = new PIXI.Container();
let topLine = new PIXI.Graphics();
topLine.lineStyle(10, 0xFFFF00, 1);
topLine.moveTo(5,0);
topLine.lineTo(5, 200);
topLine.position.x = renderer.width / 2.5;
stage.addChild(topLine);

let bottomLine = new PIXI.Graphics();
bottomLine.lineStyle(10, 0xFFFF00, 1);
bottomLine.moveTo(5,100);
bottomLine.lineTo(5, 300);
bottomLine.position.x = renderer.width / 2.5;
bottomLine.position.y = renderer.height / 2;
stage.addChild(bottomLine);

function render(){
    renderer.render(stage);
}

let full = false;
let portsArray = [];

function createPort() {
  for (let i = 30; i <= 560; i += 140) {
    portsArray.push(new MainPort(i));
  }
}
function renderPorts(arr: Array<MainPort>, full) {
  let i: number = 0;
  arr.forEach(port => {
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(7, 0xFFFF00, 1);
    if (full == true) {
      rectangle.beginFill(0xFFFF00);
    } 
    rectangle.drawRect(0, 0, 40, 120);
    rectangle.endFill();
    rectangle.x = 10;
    rectangle.y = port.y;
    port.isFull = full;
    stage.addChild(rectangle);
  });
  render();
} 
window.onload = () => {
  createPort();
  new renderPorts(portsArray, full);
  document.body.appendChild(renderer.view);
}
class MainShip {
  constructor (public color: number, public isComplete: boolean) {
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(5, color, 1);
    if (isComplete == true) {
      rectangle.beginFill(color);
    } 
    rectangle.drawRect(0, 0, 120, 40);
    rectangle.endFill();
    rectangle.x = 600;
    rectangle.y = 200;
    console.log('ship is created')
    stage.addChild(rectangle);
  }
}

let complete;
let shipColors = [0x00FF00, 0xFF0000];

function newShip () {
  let randomColor = shipColors[Math.floor(Math.random()*shipColors.length)];
  if (randomColor == shipColors[0]) {
    complete = false;
  } else {
    complete = true;
  }
  let ship = new MainShip (randomColor, complete);
}
newShip();



