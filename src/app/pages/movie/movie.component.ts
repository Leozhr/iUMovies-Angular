import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { average } from 'src/app/global/functions/average';
import { resolution } from 'src/app/global/functions/resolution';
import { cast } from 'src/app/interfaces/actor';
import { Film } from 'src/app/interfaces/poster';
import { MoviesService } from 'src/app/services/movies.service';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieComponent implements OnInit {
  userId: number;
  movie: Film;
  round = new average();
  pixel = new resolution();
  actors: cast[];

  constructor(private url: ActivatedRoute, private api: MoviesService) {}

  ngOnInit(): void {
    this.userId = this.url.snapshot.params['id'];
    this.getID();
    window.scroll({ top: 0 });
  }

  getID() {
    this.api.movieID(this.userId).subscribe({
      next: (result) => {
        this.movie = result;
      },
      error: () => {},
    });
  }
}
