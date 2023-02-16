import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MovieRoutingModule } from './movie.routing';
import { AveragePipe } from 'src/app/global/pipes/average.pipe';
import { ActorsComponent } from './actors/actors.component';

@NgModule({
  declarations: [MovieComponent, AveragePipe, ActorsComponent],
  imports: [CommonModule, RoundProgressModule, MovieRoutingModule],
})
export class MovieModule {}
