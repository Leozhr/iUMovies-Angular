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
  popular: Result[];
  top: Result[];
  upcoming: Result[];

  constructor(private api: MoviesService) {}

  ngOnInit(): void {
    this.Popular();
    this.Top();
    this.UpComing();
  }

  Popular() {
    this.api.popular().subscribe({
      next: (result) => {
        this.popular = result.results;
      },
      error: () => {},
    });
  }

  Top() {
    this.api.top().subscribe({
      next: (result) => {
        this.top = result.results;
      },
      error: () => {},
    });
  }

  UpComing() {
    this.api.upcoming().subscribe({
      next: (result) => {
        this.upcoming = result.results;
      },
      error: () => {},
    });
  }
}
