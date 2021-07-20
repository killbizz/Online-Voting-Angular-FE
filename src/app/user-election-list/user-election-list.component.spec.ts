import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElectionListComponent } from './user-election-list.component';

describe('UserElectionListComponent', () => {
  let component: UserElectionListComponent;
  let fixture: ComponentFixture<UserElectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserElectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserElectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
