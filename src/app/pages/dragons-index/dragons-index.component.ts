import { Component, OnInit } from '@angular/core';
import {DragonsDataService} from '../../services/dragons-data.service';
import {Dragon} from '../../models/dragon';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-dragons-index',
  templateUrl: './dragons-index.component.html',
  styleUrls: ['./dragons-index.component.scss']
})
export class DragonsIndexComponent implements OnInit {

  dragons$: Observable<Dragon[]>;

  constructor(
    private dragonsDataService: DragonsDataService
  ) {
    this.dragons$ = this.dragonsDataService.all().pipe(
      share()
    );
  }

  ngOnInit(): void {
  }

}
