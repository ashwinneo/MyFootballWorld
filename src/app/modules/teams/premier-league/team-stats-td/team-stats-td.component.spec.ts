import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatsTdComponent } from './team-stats-td.component';

describe('TeamStatsTdComponent', () => {
  let component: TeamStatsTdComponent;
  let fixture: ComponentFixture<TeamStatsTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatsTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
