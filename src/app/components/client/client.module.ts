import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientCategoriesComponent } from './client-categories/client-categories.component';



@NgModule({
  declarations: [
    ClientComponent,
    ClientCreateComponent,
    ClientViewComponent,
    ClientCategoriesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
