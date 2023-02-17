import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingComponent } from './upcoming.component';
import { UpcomingRoutingModule } from './upcoming.routing';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [CommonModule, UpcomingRoutingModule],
})
export class UpcomingModule {}
