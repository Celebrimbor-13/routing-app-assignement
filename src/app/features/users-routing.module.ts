import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
  },
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
