import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthModule } from './components/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MeetingComponent } from './components/meeting/meeting.component';

import { ClientsComponent } from './components/clients/clients.component';
import { AddclientComponent } from './components/clients/addclient/addclient.component';
import { ViewclientComponent } from './components/clients/viewclient/viewclient.component';
import { ManageclientComponent } from './components/clients/manageclient/manageclient.component';
import { MeetingsComponent } from './componentss/meetings/meetings.component';
import { AddmeetingComponent } from './componentss/meetings/addmeeting/addmeeting.component';
import { ViewmeetingComponent } from './componentss/meetings/viewmeeting/viewmeeting.component';
import { ManagemeetingComponent } from './componentss/meetings/managemeeting/managemeeting.component';
import { ClientComponent } from './components/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    ContactusComponent,
     MeetingComponent,
     ClientComponent,
     ClientsComponent,
     AddclientComponent,
     ViewclientComponent,
     ManageclientComponent,
     MeetingsComponent,
     AddmeetingComponent,
     ViewmeetingComponent,
     ManagemeetingComponent
     
 
 
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,  AuthModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }