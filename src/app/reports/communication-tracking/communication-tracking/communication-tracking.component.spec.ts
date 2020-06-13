import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTrackingComponent } from './communication-tracking.component';

describe('CommunicationTrackingComponent', () => {
  let component: CommunicationTrackingComponent;
  let fixture: ComponentFixture<CommunicationTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
