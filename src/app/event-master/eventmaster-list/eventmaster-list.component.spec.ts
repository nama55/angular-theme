import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmasterListComponent } from './eventmaster-list.component';

describe('EventmasterListComponent', () => {
  let component: EventmasterListComponent;
  let fixture: ComponentFixture<EventmasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
