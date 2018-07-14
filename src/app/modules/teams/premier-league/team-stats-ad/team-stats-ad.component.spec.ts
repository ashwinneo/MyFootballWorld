import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatsAdComponent } from './team-stats-ad.component';

describe('TeamStatsAdComponent', () => {
  let component: TeamStatsAdComponent;
  let fixture: ComponentFixture<TeamStatsAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatsAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
