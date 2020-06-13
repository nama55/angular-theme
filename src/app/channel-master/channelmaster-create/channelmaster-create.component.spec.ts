import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelmasterCreateComponent } from './channelmaster-create.component';

describe('ChannelmasterCreateComponent', () => {
  let component: ChannelmasterCreateComponent;
  let fixture: ComponentFixture<ChannelmasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelmasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelmasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
