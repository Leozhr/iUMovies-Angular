import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipe } from '../global/pipes/safe.pipe';

@NgModule({
  declarations: [HomeComponent, SafePipe],
  imports: [CommonModule, SwiperModule, AppRoutingModule, BrowserModule],
  exports: [],
})
export class PagesModule {}
