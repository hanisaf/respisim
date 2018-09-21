import { Component, OnInit, Input, Inject } from '@angular/core';
import {VentilatorComponent} from '../ventilator/ventilator.component';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() title: string;
  favoriteSeason: string;
  answers: string[];
  text: string;
  hint: string;

  constructor() {
    this.text = this.mutter();
    this.hint = this.mutter();
    this.answers = new Array<string>(5);
    for(let i =0; i<this.answers.length; i++) {
      this.answers[i]=this.mutter();
    }
  }

  mutter(): string {
    let s = ""+Math.random();
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return ""+h;
  }

  ngOnInit() {
  }

  submit() {
    VentilatorComponent.y = 0;

  }

  help() {
    // this.dialog.open(DialogDataExampleDialog, {
    //   data: {
    //     hint: this.hint
    //   }
    // });
    window.alert(this.hint);
  }
}
