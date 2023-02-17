import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  movies: Result[];

  constructor(private film: MoviesService) {}

  ngOnInit(): void {
    this.film.popular().subscribe({
      next: (result) => {
        this.movies = result.results;
      },
      error: () => {},
    });
  }
}
