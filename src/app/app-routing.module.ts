import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/main' },
  { path: 'home/main', component: HomeComponent },
  {
    path: 'home/movie/:id',
    loadChildren: () =>
      import('./pages/movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'home/popular',
    loadChildren: () =>
      import('./pages/popular/popular.module').then((m) => m.PopularModule),
  },
  {
    path: 'home/top',
    loadChildren: () =>
      import('./pages/top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'home/upcoming',
    loadChildren: () =>
      import('./pages/upcoming/upcoming.module').then((m) => m.UpcomingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
