import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
// import { NotFoundComponent } from 'src/app/not-found/not-found.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UserListComponent, UserDetailsComponent],
})
export class UsersModule {}
