import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, RouterModule, FormsModule],
  standalone:true,
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    termsAccepted: false
  };

  onSubmit() {
    if (this.contactData.termsAccepted) {
      console.log("Form Submitted:", this.contactData);
      alert("Your message has been sent successfully!");
      this.resetForm();
    } else {
      alert("Please accept the terms & conditions.");
    }
  }

  resetForm() {
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      termsAccepted: false
    };
  }

}
