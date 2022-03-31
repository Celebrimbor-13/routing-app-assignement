import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UserDetailsComponent],
})
export class UsersModule {}
