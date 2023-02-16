import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';

const MovieRoutes: Routes = [{ path: '', component: MovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(MovieRoutes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
