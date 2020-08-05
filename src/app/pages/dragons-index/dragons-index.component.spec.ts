import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsIndexComponent } from './dragons-index.component';

describe('DragonsIndexComponent', () => {
  let component: DragonsIndexComponent;
  let fixture: ComponentFixture<DragonsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
