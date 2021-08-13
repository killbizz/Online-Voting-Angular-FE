import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionListComponent } from './admin-election-list.component';

describe('AdminElectionListComponent', () => {
  let component: AdminElectionListComponent;
  let fixture: ComponentFixture<AdminElectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminElectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
