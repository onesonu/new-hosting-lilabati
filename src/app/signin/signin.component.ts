import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, RouterModule,FormsModule],
  standalone:true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  selectedRole: string = '';

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    alert('Thank You! '  + ' We are Working on This features ---COMING SOON--- ');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }
}
