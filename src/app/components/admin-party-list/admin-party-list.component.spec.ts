import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartyListComponent } from './admin-party-list.component';

describe('AdminPartyListComponent', () => {
  let component: AdminPartyListComponent;
  let fixture: ComponentFixture<AdminPartyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
