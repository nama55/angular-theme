import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivalmasterListComponent } from './archivalmaster-list.component';

describe('ArchivalmasterListComponent', () => {
  let component: ArchivalmasterListComponent;
  let fixture: ComponentFixture<ArchivalmasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivalmasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivalmasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
