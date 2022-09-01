import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserViewComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
