import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalHomeComponent } from '../modals/modal-home.component';
import { HomeService } from '../services/home.service';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: any[] = [];
  public moviesSugerencias: any[] = [];
  public firstLogin: boolean = true;
  public sugerencias: any;
  public userSugerencias: any;
  public userId!: number;
  public apiUrl = environment.apiUrl;
  public bgflag :boolean = false;
  public sugerenciasData: any[] = [];

  constructor(
    private dialog: MatDialog,
    public HomeService: HomeService
  ) { }

  ngOnInit() {
    this.getMovies();
    if (this.firstLogin) {
      this.bgflag = true;
      const dialogRef = this.dialog.open(ModalHomeComponent, {
        data: {
          loginflag: true
        }
      });

      dialogRef.componentInstance.onGuardar.subscribe((res: any) => {
        this.sugerencias = res.genPreferidos;
        this.userId = Number(res.userId);
        this.getMoviesBySugerencias();
      });
    }else{
      this.getSugerencias(this.userId);
    }
  }

  async getSugerencias(userId: number){
    this.bgflag = false;
    this.userSugerencias = await this.HomeService.getSugerencias(this.apiUrl, userId);
    this.sugerencias = this.userSugerencias.genPreferidos;
    console.log(this.sugerencias); 
  }

  async getMovies(){
    this.movies = await this.HomeService.getMoviesAll(this.apiUrl);
  }
  async getMoviesBySugerencias() {
    if (this.sugerencias && this.sugerencias.length > 0) {
      const sugerenciasPromises = this.sugerencias.map(async (genreId: number) => {
        console.log(genreId);
        
        return await this.HomeService.getMoviesByGenreId(this.apiUrl, genreId);
      });
      this.sugerenciasData = await Promise.all(sugerenciasPromises);
      this.sugerenciasData = this.sugerenciasData.flat();
      console.log(this.sugerenciasData);
    }
  }
}
