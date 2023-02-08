import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SwiperModule],
  exports: [],
})
export class PagesModule {}