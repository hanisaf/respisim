import { Component } from '@angular/core';
import * as p5 from 'p5';

var x, y;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'respisim';
  private p5;
  ngOnInit() {
    this.createCanvas();
  }
  
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(720, 400);
      // Starts in the middle
      x = p.width / 2;
      y = p.height;
    };
  
    p.draw = () => {
      p.background(200);
  
      // Draw a circle
      p.stroke(50);
      p.fill(100);
      p.ellipse(x, y, 24, 24);
      
      // Jiggling randomly on the horizontal axis
      x = x + p.random(-1, 1);
      // Moving up at a constant speed
      y = y - 1;
      
      // Reset to the bottom
      if (y < 0) {
        y = p.height;
      }
    };
  }

}
