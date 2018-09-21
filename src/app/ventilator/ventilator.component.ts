import { Component, OnInit, Input } from '@angular/core'; 

var x, y;

var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

var reset = false;
function draw() {
  var canvas = <HTMLCanvasElement> document.getElementById("canvas");
  var ctx = canvas.getContext('2d');

  if(!reset) {

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas
  
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);
  
  
    // Earth
    var time = new Date();
    var seconds = time.getSeconds();
    var milliseconds= time.getMilliseconds();
    // if(reset) {
    //   seconds = milliseconds = 0;
    //   reset = false;
    // }
    ctx.rotate(((2 * Math.PI) / 60) * seconds + ((2 * Math.PI) / 60000) * milliseconds);
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(earth, -12, -12);
  
    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * seconds + ((2 * Math.PI) / 6000) * milliseconds);
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
  
    ctx.restore();
    
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
   
    ctx.drawImage(sun, 0, 0, 300, 300);
  }


  window.requestAnimationFrame(draw);
}


@Component({
  selector: 'app-ventilator',
  templateUrl: './ventilator.component.html',
  styleUrls: ['./ventilator.component.css']
})
export class VentilatorComponent implements OnInit {
  static get y(): number {
    return y;
}

static set y(value: number) {
    y = value;
    reset = !reset;
}



  
  ngOnInit() {
    init();

  }
  

  

}