import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElectionHistoryComponent } from './user-election-history.component';

describe('UserElectionHistoryComponent', () => {
  let component: UserElectionHistoryComponent;
  let fixture: ComponentFixture<UserElectionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserElectionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserElectionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
