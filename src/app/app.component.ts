import { Component } from '@angular/core';
import * as p5 from 'p5';

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
      p.createCanvas(500, 500);
    };
  
    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50, 50);
      p.line(1,1,100,100);
    };
  }

}
