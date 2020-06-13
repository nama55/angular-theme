import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmasterCreateComponent } from './eventmaster-create.component';

describe('EventmasterCreateComponent', () => {
  let component: EventmasterCreateComponent;
  let fixture: ComponentFixture<EventmasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
