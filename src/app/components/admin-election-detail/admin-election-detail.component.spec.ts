import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionDetailComponent } from './admin-election-detail.component';

describe('AdminElectionDetailComponent', () => {
  let component: AdminElectionDetailComponent;
  let fixture: ComponentFixture<AdminElectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminElectionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
