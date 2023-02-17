import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MovieRoutingModule } from './movie.routing';
import { AveragePipe } from 'src/app/global/pipes/average.pipe';
import { ActorsComponent } from './actors/actors.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [MovieComponent, AveragePipe, ActorsComponent],
  imports: [
    CommonModule,
    RoundProgressModule,
    MovieRoutingModule,
    SwiperModule,
  ],
})
export class MovieModule {}
