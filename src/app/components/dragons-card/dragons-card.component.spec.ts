import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsCardComponent } from './dragons-card.component';

describe('DragonsCardComponent', () => {
  let component: DragonsCardComponent;
  let fixture: ComponentFixture<DragonsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
