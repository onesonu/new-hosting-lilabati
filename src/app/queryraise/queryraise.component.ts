import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-queryraise',
  imports: [RouterModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './queryraise.component.html',
  styleUrls: ['./queryraise.component.css']
})
export class QueryraiseComponent {

  // Input to control modal visibility
  @Input() isModalOpen: boolean = false;

  // EventEmitter to emit closeModal event
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  // Form data model
  userName: string = '';
  userPhone: string = '';
  userQuery: string = '';

  phonePattern: string = '^[0-9+\-() ]+$'; // Allows numbers, spaces, +, -, parentheses
  // Method to check if the form is valid
  isFormValid(): boolean {
    return this.userName.trim() !== '' && this.userPhone.trim() !== '' && this.userQuery.trim() !== '';
  }

  // Send the email using EmailJS
  sendEmail() {
    const templateParams = {
      user_name: this.userName,
      user_phone: this.userPhone,
      user_query: this.userQuery
    };

    emailjs.send('service_em2c8xq', 'template_gy21n0t', templateParams, 'Tg_ShbfdeNwrMlQY0')
      .then((response) => {
        console.log(this.userName);
        console.log(this.userPhone);
        console.log(this.userName);
        console.log(this.userQuery);
        console.log('Email successfully sent:', response);
        alert('Your query has been submitted!');
        this.resetForm();
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send your query, please try again later.');
      });
  }

  // Reset form after submission
  resetForm() {
    this.userName = '';
    this.userPhone = '';
    this.userQuery = '';
    this.closeModal.emit(); // Close the modal after submission
  }
  

}
