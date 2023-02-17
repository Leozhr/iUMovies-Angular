import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { average } from 'src/app/global/functions/average';
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
  color: string = 'black';

  constructor(
    private url: ActivatedRoute,
    private api: MoviesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.userId = this.url.snapshot.params['id'];
    this.getID();
    window.scroll({ top: 0 });
    this.spinner.hide();
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
