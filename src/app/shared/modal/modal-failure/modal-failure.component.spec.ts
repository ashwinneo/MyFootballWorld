import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFailureComponent } from './modal-failure.component';

describe('ModalFailureComponent', () => {
  let component: ModalFailureComponent;
  let fixture: ComponentFixture<ModalFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
