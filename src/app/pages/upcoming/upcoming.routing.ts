import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming.component';

const UpcomingRoutes: Routes = [{ path: '', component: UpcomingComponent }];

@NgModule({
  imports: [RouterModule.forChild(UpcomingRoutes)],
  exports: [RouterModule],
})
export class UpcomingRoutingModule {}
