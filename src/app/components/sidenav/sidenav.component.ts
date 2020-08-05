import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {defaultIfEmpty, map, tap} from "rxjs/operators";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  shouldRun = true;
  @ViewChild('sidenav') sidenav: MatSidenav;

  breakpoints$ = this.breakpointObserver.observe([
    Breakpoints.Medium,
    Breakpoints.Small,
    Breakpoints.XSmall
  ]).pipe(
    map( data =>  data.matches)
  );

  mode$ = this.breakpoints$.pipe(
    map( data => {


      if (data) {
        return 'over';
      } else {
        return 'side';
      }

    }),
    defaultIfEmpty('over')
  );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpoints$.subscribe(log => console.log(log));
  }

  ngOnInit(): void {
  }

}
