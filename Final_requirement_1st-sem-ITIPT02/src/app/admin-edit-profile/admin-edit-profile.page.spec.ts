import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEditProfilePage } from './admin-edit-profile.page';

describe('AdminEditProfilePage', () => {
  let component: AdminEditProfilePage;
  let fixture: ComponentFixture<AdminEditProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
