import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  protected API_PATH: string = 'c5dc9b0feb64b83f34fdfebdcf3c8f2d';

  Actors(id: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.API_PATH}`
    );
  }

  Posters(id: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${this.API_PATH}`
    );
  }
}
