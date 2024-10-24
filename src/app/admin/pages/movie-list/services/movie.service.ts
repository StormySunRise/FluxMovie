import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    { title: 'Inception', genre: 'Sci-Fi' },
    { title: 'The Dark Knight', genre: 'Action' },
    { title: 'Interstellar', genre: 'Sci-Fi' },
    { title: 'The Godfather', genre: 'Drama' },
    { title: 'Forrest Gump', genre: 'Drama' },
    { title: 'Dumb and Dumber', genre: 'Comedy' }
  ];

  getMovies() {
    return this.movies;
  }

  getSuggestions(userId: number) {
    return this.movies.filter(movie => {
      return true;
    });
  }
}
