import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priorities: string[];
  priority: string;
  now: Date = new Date();
  currentValue: Date = new Date();
  firstDay: number = 0;
  minDateValue: Date = undefined;
  maxDateValue: Date = undefined;
  disabledDates: Function = null;

  zoomLevels: string[] = [
    "month", "year", "decade", "century"
  ];
  cellTemplate = "cell";
  holydays: any = [[1, 0], [4, 6], [25, 11]];
  okButtonOptions: any;

  constructor() {

    this.priorities = [
      "Low",
      "Normal",
      "Urgent",
      "High"
    ];
    this.priority = this.priorities[2];

    this.okButtonOptions = {
      text: 'OK',
      type: 'success',
      onClick: function (e) {
        notify("The OK button was clicked");
      }
    };


  }
}