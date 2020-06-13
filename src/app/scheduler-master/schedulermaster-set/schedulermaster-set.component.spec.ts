import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulermasterSetComponent } from './schedulermaster-set.component';

describe('SchedulermasterSetComponent', () => {
  let component: SchedulermasterSetComponent;
  let fixture: ComponentFixture<SchedulermasterSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulermasterSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulermasterSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
