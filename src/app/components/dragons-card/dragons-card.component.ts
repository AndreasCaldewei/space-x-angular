import {Component, Input, OnInit} from '@angular/core';
import {Dragon} from '../../models/dragon';

@Component({
  selector: 'app-dragons-card',
  templateUrl: './dragons-card.component.html',
  styleUrls: ['./dragons-card.component.scss']
})
export class DragonsCardComponent implements OnInit {

  @Input()
  dragon: Dragon;

  @Input()
  datasource: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
