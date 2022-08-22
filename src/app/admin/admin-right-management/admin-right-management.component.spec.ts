import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightManagementComponent } from './admin-right-management.component';

describe('AdminRightManagementComponent', () => {
  let component: AdminRightManagementComponent;
  let fixture: ComponentFixture<AdminRightManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRightManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRightManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
