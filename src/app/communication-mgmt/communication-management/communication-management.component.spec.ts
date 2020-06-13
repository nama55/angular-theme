import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationManagementComponent } from './communication-management.component';

describe('CommunicationManagementComponent', () => {
  let component: CommunicationManagementComponent;
  let fixture: ComponentFixture<CommunicationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
