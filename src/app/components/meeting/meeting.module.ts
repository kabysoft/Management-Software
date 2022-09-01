import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting.component';
import { MeetingCreateComponent } from './meeting/meeting-create/meeting-create.component';
import { MeetingViewComponent } from './meeting/meeting-view/meeting-view.component';
import { MeetingSchedulesComponent } from './meeting/meeting-schedules/meeting-schedules.component';
import { CreateComponent } from './meeting/create/create.component';



@NgModule({
  declarations: [
    MeetingComponent,
    CreateComponent,
    MeetingCreateComponent,
    MeetingViewComponent,
    MeetingSchedulesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MeetingModule { }
