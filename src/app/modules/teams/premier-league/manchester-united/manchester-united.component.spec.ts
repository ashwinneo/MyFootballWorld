import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManchesterUnitedComponent } from './manchester-united.component';

describe('ManchesterUnitedComponent', () => {
  let component: ManchesterUnitedComponent;
  let fixture: ComponentFixture<ManchesterUnitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchesterUnitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManchesterUnitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
