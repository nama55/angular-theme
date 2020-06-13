import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderCreateComponent } from './serviceprovider-create.component';

describe('ServiceproviderCreateComponent', () => {
  let component: ServiceproviderCreateComponent;
  let fixture: ComponentFixture<ServiceproviderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceproviderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
