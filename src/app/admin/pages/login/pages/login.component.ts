import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  public apiUrl = environment.apiUrl;
  public users: any[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {  
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.loginService.getUserAll(this.apiUrl);
  }

  login() {
    const user = this.users.find(u => u.email === this.email);
    console.log(user.id);
    
    if (user) {
      if (user.password === this.password) {
        localStorage.setItem('loggedUser', JSON.stringify(user.id));
        this.router.navigate(['/Auth/home']);
      } else {
        alert('Contraseña incorrecta');
      }
    } else {
      alert('Usuario no encontrado');
    }
  }
}
