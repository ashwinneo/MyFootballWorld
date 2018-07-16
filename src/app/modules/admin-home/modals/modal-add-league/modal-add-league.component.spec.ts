import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddLeagueComponent } from './modal-add-league.component';

describe('ModalAddLeagueComponent', () => {
  let component: ModalAddLeagueComponent;
  let fixture: ComponentFixture<ModalAddLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
