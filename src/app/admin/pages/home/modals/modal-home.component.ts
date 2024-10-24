import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {
  public apiUrl = environment.apiUrl;
  public listGeneros : any[] = []
  public selectedGeneros: number[] = [];
  public userId: number = 1;
  public bgFlag: boolean = false;

  @Output() onGuardar: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isSuccess: boolean, message: string },
    private router: Router,
    public matDialogRef: MatDialogRef<ModalHomeComponent>,
    public HomeService: HomeService
  ) {
    this.matDialogRef.disableClose = true;
  }

  ngOnInit(): void {
    const user = localStorage.getItem('loggedUser');
    console.log(user);
    
    this.userId = Number(user);
    console.log(this.userId);
    
    
    this.getGenero();
  }

  redirectToRoute() {
    this.matDialogRef.close();
  }
  async getGenero(){
    this.listGeneros = await this.HomeService.getGeneros(this.apiUrl);
    console.log(this.listGeneros);
  }

  toggleGeneroSelection(genreId: number) {
    const index = this.selectedGeneros.indexOf(genreId);
    
    if (index > -1) {
      this.selectedGeneros.splice(index, 1);
    } else {
      if (this.selectedGeneros.length < 5) {
        this.selectedGeneros.push(genreId);
      } else {
        console.log('Solo puedes seleccionar hasta 5 géneros.');
      }
    }
  }

 guardar() {
    this.saveSugerencias();
    this.matDialogRef.close();
  }
  
  async saveSugerencias(){
    const res =  await this.HomeService.sugerencias(this.apiUrl, this.userId, this.selectedGeneros);
    console.log(res);
    
    this.onGuardar.emit(res);
  }

  isGeneroSelected(genreId: number): boolean {
    return this.selectedGeneros.includes(genreId);
  }
}
