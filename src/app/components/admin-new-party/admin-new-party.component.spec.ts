import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewPartyComponent } from './admin-new-party.component';

describe('AdminNewPartyComponent', () => {
  let component: AdminNewPartyComponent;
  let fixture: ComponentFixture<AdminNewPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
