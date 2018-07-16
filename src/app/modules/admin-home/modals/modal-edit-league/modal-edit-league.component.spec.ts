import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditLeagueComponent } from './modal-edit-league.component';

describe('ModalEditLeagueComponent', () => {
  let component: ModalEditLeagueComponent;
  let fixture: ComponentFixture<ModalEditLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
