import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../movie-list/services/movie.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  @Input() userId!: number;
  suggestedMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.suggestedMovies = this.movieService.getSuggestions(this.userId);
  }
}
