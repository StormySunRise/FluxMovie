import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownOpen = false;
  selectedLanguage = 'EN';

  constructor(private router: Router) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; 
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language; 
    this.dropdownOpen = false; 
  }

  goToRegister() {
    this.router.navigate(['/Auth/user-registration']);
  }
  goTologin() {
    this.router.navigate(['/Auth/login']);
  }
}
