import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthComponent } from './components/auth/auth.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MeetingCreateComponent } from './components/meeting/meeting/meeting-create/meeting-create.component';
import { MeetingsComponent } from './componentss/meetings/meetings.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'auth', component:AuthComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'about', component:AboutusComponent},
  {path:'client', component:ClientComponent},
  {path:'meeting', component:MeetingComponent},
  {path:'meetings', component:MeetingsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'client-create',component:ClientCreateComponent},
  {path:'meeting-create',component:MeetingCreateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
