import { Component, OnInit } from '@angular/core';
import { resolution } from 'src/app/global/functions/resolution';
import { Result } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  movies: Result[];
  pixel = new resolution();

  constructor(private film: MoviesService) {}

  ngOnInit(): void {
    this.film.top().subscribe({
      next: (result) => {
        this.movies = result.results;
      },
      error: () => {},
    });
  }
}
