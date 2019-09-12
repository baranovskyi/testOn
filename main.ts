import {MainPort } from "./port";
import * as PIXI from 'pixi.js-legacy';

let portsArray = [];

const renderer = PIXI.autoDetectRenderer( {
  width: 900,
  height: 600,
  backgroundColor: 0x1a5fb3
});
window.onload = () => {
  createPort();
  renderPorts(portsArray)
  document.body.appendChild(renderer.view);
}
	

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

// let rectangle = new PIXI.Graphics();
// rectangle.lineStyle(7, 0xFFFF00, 1);
// // rectangle.beginFill(0xFFFF00);
// rectangle.drawRect(0, 0, 40, 120);
// rectangle.endFill();
// rectangle.x = 10;
// rectangle.y = 10;
// // stage.addChild(rectangle)

// let secondPort = new PIXI.Graphics();
// secondPort.lineStyle(20, 0xFFFF00, 1);
// secondPort.drawRect(0, 0, 40, 120);
// secondPort.endFill();
// secondPort.x = 100;
// secondPort.y = 10;
// stage.addChild(rectangle, secondPort);

function render(){
    renderer.render(stage);
}

function createPort() {
  for (let i = 30; i <= 560; i += 140) {
    portsArray.push(new MainPort(i))
  }
}

function renderPorts(arr: Array<MainPort>) {

  let i: number = 0;
  arr.forEach(port => {
    console.log(`I'm in ${++i} times`);
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(7, 0xFFFF00, 1);
    // rectangle.beginFill(0xFFFF00);
    rectangle.drawRect(0, 0, 40, 120);
    rectangle.endFill();
    rectangle.x = 10;
    rectangle.y = port.y;
    port.isFull = false;
    stage.addChild(rectangle);
  });
  render();
}