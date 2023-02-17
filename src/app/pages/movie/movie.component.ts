import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { average } from 'src/app/global/functions/average';
import { resolution } from 'src/app/global/functions/resolution';
import { Film } from 'src/app/interfaces/poster';
import { MoviesService } from 'src/app/services/movies.service';

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
  color: string = 'black';

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
        this.getColor();
      },
      error: () => {},
    });
  }

  getColor() {
    this.color = this.round.circle(this.movie.vote_average);
  }
}
