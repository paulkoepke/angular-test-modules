import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminRightManagementComponent } from './admin-right-management/admin-right-management.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminSettingsComponent,
    AdminRightManagementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
