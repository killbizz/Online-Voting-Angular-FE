import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElectionDetailComponent } from './user-election-detail.component';

describe('UserElectionDetailComponent', () => {
  let component: UserElectionDetailComponent;
  let fixture: ComponentFixture<UserElectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserElectionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserElectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
