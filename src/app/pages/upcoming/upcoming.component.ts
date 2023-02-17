import { Component, OnInit } from '@angular/core';
import { resolution } from 'src/app/global/functions/resolution';
import { Result } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  movies: Result[];
  pixel = new resolution();

  constructor(private film: MoviesService) {}

  ngOnInit(): void {
    this.film.upcoming().subscribe({
      next: (result) => {
        this.movies = result.results;
      },
      error: () => {},
    });
  }
}
