import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteLeagueComponent } from './modal-delete-league.component';

describe('ModalDeleteLeagueComponent', () => {
  let component: ModalDeleteLeagueComponent;
  let fixture: ComponentFixture<ModalDeleteLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
