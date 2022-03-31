import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './features/users.module';
import { UserListComponent } from './features/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
