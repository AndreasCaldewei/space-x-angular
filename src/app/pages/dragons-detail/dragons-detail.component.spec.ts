import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsDetailComponent } from './dragons-detail.component';

describe('DragonsDetailComponent', () => {
  let component: DragonsDetailComponent;
  let fixture: ComponentFixture<DragonsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
