import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  showError = false;
  showPassword = false;

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.email === 'admin@ecoconstruct.com' && this.password === 'admin123') {
      this.router.navigate(['/dashboard']);
    } else {
      this.showError = true;
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
