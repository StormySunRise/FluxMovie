import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-registration/services/user.service';
import { MovieService } from '../../movie-list/services/movie.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  users: any[] = [];
  movies: any[] = [];

  constructor(private userService: UserService, private movieService: MovieService) {}

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.movies = this.movieService.getMovies();
  }
}
