import { Component, OnInit } from '@angular/core';
import {DragonsDataService} from '../../services/dragons-data.service';
import {Dragon} from '../../models/dragon';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {share} from "rxjs/operators";

@Component({
  selector: 'app-dragons-detail',
  templateUrl: './dragons-detail.component.html',
  styleUrls: ['./dragons-detail.component.scss']
})
export class DragonsDetailComponent implements OnInit {

  dragon$: Observable<Dragon>;

  constructor(
    private dragonsDataService: DragonsDataService,
    private activatedRoute: ActivatedRoute
  ) {
    const { id } =  this.activatedRoute.snapshot.params;
    this.dragon$ = this.dragonsDataService.one(id).pipe(
      share(),
    );
  }

  ngOnInit(): void {
  }

}
