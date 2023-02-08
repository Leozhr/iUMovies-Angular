import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular/popular.component';
import { TopComponent } from './top/top.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [PopularComponent, TopComponent, UpcomingComponent],
  imports: [CommonModule, NgModule],
  exports: [PopularComponent, TopComponent, UpcomingComponent],
})
export class ModelsModule {}
