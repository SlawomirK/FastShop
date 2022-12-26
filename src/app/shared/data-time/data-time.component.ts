import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-time-component',
  templateUrl: './data-time.component.html',
  styleUrls: ['./data-time.component.less']
})
export class DataTimeComponent {

  @Input()
  dateTransaction!: Date;
}

