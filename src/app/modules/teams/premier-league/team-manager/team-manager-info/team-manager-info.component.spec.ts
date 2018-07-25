import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamManagerInfoComponent } from './team-manager-info.component';

describe('TeamManagerInfoComponent', () => {
  let component: TeamManagerInfoComponent;
  let fixture: ComponentFixture<TeamManagerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamManagerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamManagerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
