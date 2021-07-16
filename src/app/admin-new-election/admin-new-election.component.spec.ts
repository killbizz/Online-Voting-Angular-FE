import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewElectionComponent } from './admin-new-election.component';

describe('AdminNewElectionComponent', () => {
  let component: AdminNewElectionComponent;
  let fixture: ComponentFixture<AdminNewElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
