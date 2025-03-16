import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, RouterModule, FormsModule],
  standalone:true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  password: string ='';
  passwordVisible: boolean = false;
  selectedRole: string = '';

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    alert('Thank You ' + this.fullName + ' This features comming soon ');
    console.log('Username:', this.fullName);
    console.log('Password:', this.password);
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }

}
