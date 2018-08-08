import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RespiSim';
  colorScheme = {
    domain: ['#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  };

  @Input() data = [
    {
      "name": "Hani",
      "value": 46268
    },
    {
      "name": "Sami",
      "value": 53041
    },
    {
      "name": "Hassan",
      "value": 42503
    },
    {
      "name": "Baba",
      "value": 41787
    },
    {
      "name": "Mama",
      "value": 29863
    },
    {
      "name": "Teta",
      "value": 35925
    }
  ];
  onClickAbout() {
    alert("Brought to you by me");
    console.log(this.data);
  }

  onClickSurprise() {
    let data = new Array(this.data.length);
    // for (let r of this.data) {
    //    let nv = Math.floor(Math.random() * 100000) + 1;
    //    r.value = nv;
    //  }
     for(let i=0;i<this.data.length; i++) {
        let r = this.data[i];
        r.value=Math.floor(Math.random() * 100000) + 1;
        data[i]=r;
     }
     this.data=data;
  }
}
