import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelmasterListComponent } from './channelmaster-list.component';

describe('ChannelmasterListComponent', () => {
  let component: ChannelmasterListComponent;
  let fixture: ComponentFixture<ChannelmasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelmasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelmasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
