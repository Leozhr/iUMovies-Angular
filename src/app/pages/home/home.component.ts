import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Result } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  movies: Result[];

  constructor(private api: MoviesService) {}

  ngOnInit(): void {
    this.api.top().subscribe({
      next: (result) => {
        this.movies = result.results;
        console.log(this.movies);
      },
      error: () => {},
    });
  }
}
