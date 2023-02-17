import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top.routing';
import { TopComponent } from './top.component';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, TopRoutingModule],
})
export class TopModule {}