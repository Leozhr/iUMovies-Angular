import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  protected API_PATH: string = 'c5dc9b0feb64b83f34fdfebdcf3c8f2d';

  popular(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_PATH}`
    );
  }

  top(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_PATH}`
    );
  }

  upcoming(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_PATH}`
    );
  }

  movieID(ID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${ID}?api_key=${this.API_PATH}`
    );
  }
}
