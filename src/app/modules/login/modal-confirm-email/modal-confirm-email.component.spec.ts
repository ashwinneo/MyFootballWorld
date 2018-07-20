import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmEmailComponent } from './modal-confirm-email.component';

describe('ModalConfirmEmailComponent', () => {
  let component: ModalConfirmEmailComponent;
  let fixture: ComponentFixture<ModalConfirmEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
